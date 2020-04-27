import Head from 'next/head';
import axios from 'axios';

//custom components
import Layout from '../../components/partials/Layout';
import LatestPost from '../../components/post/LatestPost';
import SectionHeader from '../../components/section/SectionHeader';

function Post({menuRoutes, post}) {
  if(post === 0) return ("page not found")

  let categories = post.categories.map(cat => <a href={'/categories/' + cat.name} className="link-category">#{cat.name},</a>);

  const desc = {__html: post.description};
  return (
    <>
      <Layout navHideTransparent={true} routes={menuRoutes}>
        <Head>
          <meta charSet="UTF-8"/>>
          <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
          <title>{post.title}</title>
          {/* <!--Font awesome CDN--> */}
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"/>
          <link rel="stylesheet" type="text/css" href="/css/ckeditor.css"></link>
          {/* <!--Scroll reveal CDN--> */}
          <script src="/main.js"></script>
        </Head>

        <div className="header-space"></div>
        {/* Navbar space ends */}

        <section>
          <div className="container">
            <div className="post__header">
            <h1 className="post__header-title">{post.title}</h1>
              <h1 className="post__header-shortDecs">{post.shortDesc}</h1>
              <h3 className="post__header-category">Хамрагдах ангиллууд</h3>
              <div className="sub-category">
                {categories}
              </div>
              <div className="post__header-author">
                <img src={post.author.avatar} className="post__profile" alt=""/>
                <h3>зохиолч {post.author.username}</h3>
              </div>

              <img src={post.coverImg} className="post__coverImg" alt=""/>
            </div>
          </div>
        </section>
        <section className="popular-post-section">
          <div className="container">
            <div className="latest-posts">
              <div className="latest-posts-controller ck-content" dangerouslySetInnerHTML={desc}>
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
        .post__header{
          display: flex;
          flex-direction: column;
          text-align: center;
          align-items: center;
          justify-content: center;
        }

        .sub-category{
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }

        :global(.link-category){
          display: block;
          color: black;
          padding: .5rem 0.5rem;
          margin: .5rem 1rem;
          font-size: 1.3rem;
          transition: all .5s;
        }

        .link-category:hover{
          color: var(--secondary-font-color);
        }

        .post__header-category{
          font-size: 1.3rem;
          color: #000;
        }

        .post__header-title{
          margin-bottom: 2rem;
          font-size: 2.0rem;
          color: #000;
        }

        .post__header-shortDecs{
          font-size: 1.4rem;
          font-weight: 100;
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .post__profile{
          width: 4rem;
          height: 4rem;
          object-fit: cover;
          border-radius: 100%;
          margin-right: 1rem;
        }

        .post__header-author{
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          font-size: 1.1rem;
          margin-bottom: 4rem;
        }

        .latest-posts-controller{
          width: 100%;
        }

        @media screen and (min-width: 500px){
          .sub-category{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media screen and (min-width: 900px){
          .post__header{
            max-width: 75rem;
            margin: 0 auto;
          }

          .sub-category{
            display: block;
          }

          :global(.link-category){
            display: inline-block !important;
          }

          .post__header-title{
            font-size: 4.0rem;
            color: #000;
          }
          .post__header-shortDecs{
            font-size: 1.7rem;
          }

          .post__coverImg{
            max-width: 75rem;
          }

          .ad-horizontal{
            width: 100%;
            max-width: 375px;
          }

          .latest-posts-controller{
            margin-right: 2rem;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps({ params }) {
  console.log(params.id);
  const res = await axios.post(process.env.GRAPHQL,{
    "operationName":null,
    "variables":{},
    "query":`{\n  post: retrieveSinglePost(url: \"${params.id}\") {\n    _id\n    title\n    url\n    coverImg\n    shortDesc\n    description\n    categories {\n      name\n    }\n    author {\n      avatar\n      username\n    }\n    rate\n    viewCount\n  }\n}\n`});

  let post = 0;

  if(res && res.data && res.data && res.data.data && res.data.data.post) {
    post = res.data.data.post;
  }

  console.log('post ::', post);
  const menuRoutes = await import('../../routes.json');
  return {
    props: {
      menuRoutes: menuRoutes.routes,
      post: post
    },
  }
}
export default Post;