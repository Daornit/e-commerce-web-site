import Head from 'next/head';
import Carousel from 'react-multi-carousel';
import {useState, useEffect} from 'react';
import axios from 'axios';

//custom components
import Layout from '../../components/partials/Layout';
import TrendPost from '../../components/post/TrendPost';
import RatedPost from '../../components/post/RatedPost';
import PopularPost from '../../components/post/PopularPost';
import LatestPost from '../../components/post/LatestPost';
import SectionHeader from '../../components/section/SectionHeader';

//backend logic
import { withApollo } from '../../lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import { POSTS_QUERY_LIST } from '../../gql/queries';

function Category({menuRoutes, category}) {

  let [listPost, setListPost] = useState([]);
  let [postPage, setPostPage] = useState(1);
  let [hasNextPage, setHasNextPage] = useState(true);

  const { data: postData, fetchMore: postsFetchMore} = useQuery(POSTS_QUERY_LIST, {variables: {category: category._id,page: postPage, limit: 5}});

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

  let subLinks = category.subCategories.map(ct => <a key={ct.name} href={'/categories/' + ct.name} className="link-sub-category">{ct.name}</a>);

  let bannerPost = {
    title: "Banner post ийг тохируулана уу?",
    author: {
      username: ""
    }
  };

  if(category.bannerPost) bannerPost = category.bannerPost;

  const loadMode = () => {
    postsFetchMore({ variables: {category: "5ea1703f76ee0030856b08ca", page: postPage + 1, limit: 5}, updateQuery(_, { fetchMoreResult }) {
      return fetchMoreResult
    } });
  }


  return (
    <>
      <Layout routes={menuRoutes}>
        <Head>
          <meta charSet="UTF-8"/>>
          <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
          <title>{category.name}</title>
          {/* <!--Font awesome CDN--> */}
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"/>
          {/* <!--Scroll reveal CDN--> */}
          <script src="/main.js"></script>
        </Head>

        <section className="banner-section" id="banner-section">
          <div className="container">
            <img src="/images/banner-background.jpeg" className="banner-background" alt=""/>
            <div className="banner-post">
              <a href={'/posts/' + bannerPost.title} className="link-post-title">
                {bannerPost.title}
              </a>
              <p className="post-author">
                зохиогч {bannerPost.author.username}
              </p>
            </div>
          </div>
        </section>
        {/* Banner post ends */}
        <section className="trend-post-section">
          <div className="container">
            <SectionHeader title='Дэд ангиллууд'/>
            <div className="sub-category">
              {subLinks}
            </div>
          </div>
        </section>
        {/* Sub categories ends */}
        <section className="trend-post-section" id="trend-posts">
          <div className="container">
            <SectionHeader title='Цаг үеэ олсон'/>
            <div className="trend-post-grid">
              {category.trendPosts.map(post => <TrendPost key={post._id} coverImg={post.coverImg} title={post.title} author={post.author.username}/>)}
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

        <section className="rated-post-section" id="rated-posts">
          <div className="container">
            <SectionHeader title='Өндөр үнэлгээтэй'/>
            <div>
              <Carousel responsive={responsive}>
                {category.ratedPosts.map(post => <RatedPost key={post._id} coverImg={post.coverImg} title={post.title} author={post.author.username} review={5}/>)}
              </Carousel>
            </div>
          </div>
        </section>
        {/* Rated post section ends */}

        <section className="popular-post-section" id="popular-posts">
          <div className="container">
            <SectionHeader title='Хамгийн их хандалттай'/>
            <div>
              <Carousel responsive={responsive}>
                {category.popularPosts.map(post => <PopularPost key={post._id} coverImg={post.coverImg} title={post.title} author={post.author.username} viewCount={1024455}/>)}
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
      <style jsx>{`
        .sub-category{
          
        }

        :global(.link-sub-category){
          display: inline-block;
          color: black;
          padding: 1rem 2rem;
          border-radius: 0.5rem;
          border: 1px solid black;
          margin: .5rem 1rem;
          font-size: 1.3rem;
          transition: all .5s;
        }

        .link-sub-category:hover{
          color: white;
          background: black;
        }

        @media screen and (min-width: 900px){
          
        }
      `}</style>
    </>
  );
}

export async function getStaticPaths() {
  const res = await axios.post(process.env.GRAPHQL, {"operationName":null,"variables":{},"query":"{\n  categories {\n    name\n  }\n}\n"});

  const paths = [];

  for(let category of res.data.data.categories){
    paths.push({
      params: {
        id: category.name
      }
    });
  }

  console.log(paths);
  
  return {
    paths: paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  console.log(params.id);
  const menuRoutes = await import('../../routes.json');
  const res = await axios.post(process.env.GRAPHQL, {
    "operationName": "retriveCategoryByName",
    "variables": {
        "name": params.id
    },
    "query": "query retriveCategoryByName($name: String!) {\n  categories(name: $name) {\n    _id\n    name\n    description\n    bannerPost {\n      _id\n      title\n      coverImg\n      author {\n        username\n      }\n    }\n    trendPosts {\n      _id\n      title\n      coverImg\n      author {\n        username\n      }\n    }\n    popularPosts {\n      _id\n      title\n      coverImg\n      author {\n        username\n      }\n    }\n    ratedPosts {\n      _id\n      title\n      coverImg\n      author {\n        username\n      }\n    }\n    subCategories {\n      _id\n      name\n    }\n  }\n}\n"
  });
  let category = null; 

  if(res.data.data.categories.length){
    category = res.data.data.categories[0];
  }
  
  return {
    props: {
      menuRoutes: menuRoutes.routes,
      category
    },
  }
}

export default withApollo({ ssr: false })(Category);