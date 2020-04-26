import Head from 'next/head';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Carousel from 'react-multi-carousel';

//custom components
import Layout from '../components/partials/Layout';
import TrendPost from '../components/post/TrendPost';
import RatedPost from '../components/post/RatedPost';
import PopularPost from '../components/post/PopularPost';
import LatestPost from '../components/post/LatestPost';
import SectionHeader from '../components/section/SectionHeader';

//backend logic
import { withApollo } from '../lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import { POSTS_QUERY_LIST } from '../gql/queries';

function Index({homeCategory, menuRoutes}) {

  let [listPost, setListPost] = useState([]);
  let [postPage, setPostPage] = useState(1);
  let [hasNextPage, setHasNextPage] = useState(true);

  const { loading: postLoading, error: postError, data: postData, fetchMore: postsFetchMore} = useQuery(POSTS_QUERY_LIST, {variables: {category: "5ea1703f76ee0030856b08ca",page: postPage, limit: 5}});

  useEffect(()=>{
    if(postData && postData.posts && postData.posts.docs){
      setPostPage(postPage++);
      setListPost([...listPost, ...postData.posts.docs]);
      setHasNextPage(postData.posts.hasNextPage);
    }
  }, [postData]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const loadMode = () => {
    postsFetchMore({ variables: {category: "5ea1703f76ee0030856b08ca", page: postPage + 1, limit: 5}, updateQuery(_, { fetchMoreResult }) {
      return fetchMoreResult
    } });
  }

  
  return (
    <Layout routes={menuRoutes}>
      <Head>
        <meta charSet="UTF-8"/>>
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <title>{homeCategory.name}</title>
        {/* <!--Font awesome CDN--> */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"/>
        {/* <!--Scroll reveal CDN--> */}
        <script src="/main.js"></script>
      </Head>
      
      {/* Header ends */}
      <section className="banner-section" id="banner-section">
        <div className="container">
          <img src="/images/banner-background.jpeg" className="banner-background" alt=""/>
          <div className="banner-post">
            <a href={'/posts/' + homeCategory.bannerPost.title} className="link-post-title">
              {homeCategory.bannerPost.title}
            </a>
            <p className="post-author">
              зохиогч {homeCategory.bannerPost.author.username}
            </p>
          </div>
        </div>
      </section>
      {/* Banner post ends */}
      <section className="trend-post-section">
        <div className="container">
          <SectionHeader title='Цаг үеэ олсон'/>
          <div className="trend-post-grid">
            {homeCategory.trendPosts.map(post => <TrendPost key={post._id} coverImg={post.coverImg} title={post.title} author={post.author.username}/>)}
          </div>
        </div>
      </section>
      {/* trend posts ends */}

      <div className="advertisement">
        <div className="container">
          <div className="separator">
            <div className="line"></div>
            Advertisement
            <div className="line"></div>
          </div>

          <div className="ad-horizontal">
            <img src="https://tpc.googlesyndication.com/simgad/17722970540873164142" border="0" width="728" height="90" alt="" className="img_ad"/>
          </div>
        </div>
      </div>

      <section className="rated-post-section">
        <div className="container">
          <SectionHeader title='Өндөр үнэлгээтэй'/>
          <div>
            <Carousel responsive={responsive}>
              {homeCategory.ratedPosts.map(post => <RatedPost key={post._id} coverImg={post.coverImg} title={post.title} author={post.author.username} review={5}/>)}
            </Carousel>
          </div>
        </div>
      </section>
      {/* Rated post section ends */}

      <section className="popular-post-section">
        <div className="container">
          <SectionHeader title='Хамгийн их хандалттай'/>
          <div>
            <Carousel responsive={responsive}>
              {homeCategory.popularPosts.map(post => <PopularPost key={post._id} coverImg={post.coverImg} title={post.title} author={post.author.username} viewCount={1024455}/>)}
            </Carousel>
          </div>
        </div>
      </section>
      {/* popular post ends */}

      <section className="popular-post-section">
        <div className="container">
          <SectionHeader title='Сүүлийн үеийн нийтлэл'/>
          <div className="latest-posts">
            <div className="latest-posts-controller padding-right">
              {listPost.map(post => <LatestPost key={post._id} coverImg={post.coverImg} title={post.title} author={post.author.username} shortDesc={post.shortDesc} date={post.createdDate.substr(0,10)}/>)}
              <div className="latest-load-more-container">
                {
                  hasNextPage ? <button onClick={(e) => loadMode()} className="btn">Цааш үзэх</button> :""
                }
              </div>
            </div>
            {/* Latest posts */}
            <div className="latest-posts-sidebar">
              <div className="advertisement">
                <div className="separator">
                  <div className="line"></div>
                  Advertisement
                  <div className="line"></div>
                </div>

                <div className="ad-horizontal">
                  <img src="https://tpc.googlesyndication.com/simgad/17722970540873164142" border="0" width="728" height="90" alt="" className="img_ad"/>
                </div>
              </div>
            </div>
            {/* Latest post sidebar */}
          </div>
        </div>
      </section>
      {/* Latest post ends*/}
    </Layout>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  const res = await axios.post(process.env.GRAPHQL, {"operationName":"homeQuery","variables":{},"query":"query homeQuery {\n  categories(id: \"5ea1703f76ee0030856b08ca\") {\n    _id\n    name\n    description\n    bannerPost {\n      _id\n      title\n      coverImg\n      author {\n        username\n      }\n    }\n    trendPosts {\n      _id\n      title\n      coverImg\n      author {\n        username\n      }\n    }\n    popularPosts {\n      _id\n      title\n      coverImg\n      author {\n        username\n      }\n    }\n    ratedPosts {\n      _id\n      title\n      coverImg\n      author {\n        username\n      }\n    }\n  }\n}\n"});
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  const menuRoutes = await import('../routes.json');
  console.log("menuRoutes::", menuRoutes);
  return {
    props: {
      homeCategory: res.data.data.categories[0],
      menuRoutes: menuRoutes.routes,
    },
  }
}

export default withApollo({ ssr: false })(Index)