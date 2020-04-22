import Head from 'next/head';
import GoogleMapReact from 'google-map-react';

//custom components
import Layout from '../components/partials/Layout';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function About() {

  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  return (
    <>
      <Layout navHideTransparent={true}>
        <Head>
          <meta charSet="UTF-8"/>>
          <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
          <title>E-Commerce</title>
          {/* <!--Font awesome CDN--> */}
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"/>
          {/* <!--Scroll reveal CDN--> */}
          <script src="/main.js"></script>
        </Head>
        <div className="header-space"></div>

        <section className="contact">
          <div className="container">
            <div className="divider-container">
              <div className="left-container mr-2">
                <img src="/images/logo-news.png" className="logo-news" alt=""/>
                <div className="flex-info">
                  <i className="fas fa-map-marked-alt"></i>
                  <p>1481 Creekside Lane Avila Beach, CA 931</p>
                </div>
                <div className="flex-info">
                  <i className="fas fa-phone-square-alt"></i>
                  <p>+53 345 7953 32453</p>
                </div>
                <div className="flex-info">
                  <i className="fas fa-paper-plane"></i>
                  <p>newsofficial@gmail.com</p>
                </div>

                <h2>Санал хүсэлт</h2>

                <form action="#">
                  <div className="divider-container">
                    <input type="text" className="mr-2" placeholder="нэр"/>
                    <input type="text" placeholder="Email"/>
                  </div>
                  <input type="text" placeholder="Гарчиг"/>
                  <textarea name="detail" id="" cols="30" rows="10" placeholder="Дэлгэрэнгүй"></textarea>

                  <button type="submit" className="btn-send">Илгээх</button>
                </form>

                <img src="/images/map.png" alt=""/>
              </div>
              <div className="sidebar-container">
                <div className="newsletter">
                  <h3>Мэдээллүүдийг хүлээнэ авах</h3>
                  <form action="#">
                    <input type="text" placeholder="Таны Email"/>
                    <button type="submit" className="btn-send fullwidth">Дагах</button>
                  </form>
                </div>

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

              </div>  
            </div>
          </div>
        </section>
      </Layout>
      <style jsx>{`
        
        .btn-send{
          background: #63D471;
          outline: none;
          border: none;
          color: white;
          padding: 1rem 2rem;
        }
        .logo-news{
          width: 17rem;
          margin-bottom: 2rem;
        }

        .divider-container{
          display: flex;
          flex-direction: column;
        }

        .left-container{
          width: 100%;
          margin-bottom: 1rem;
        }

        .sidebar-container{
          width: 100%;
          margin-bottom: 1rem;
        }

        .flex-info{
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: left;
          margin-bottom: 2rem;
        }
        
        .left-container > h2 {
          font-size: 2rem;
        }

        form {
          margin-bottom: 2rem;
        }

        form input, 
        form textarea {
          width: 100%;
          padding: 1.7rem;
          margin: 1rem 0;
          background: #f0f4f8;
          border: none;
          outline: none;
        }

        .newsletter{
          display: flex;
          flex-direction: column;
          background: #f0f4f8;
          text-align: center;
          justify-content: center;
          align-items: center;
        }

        .newsletter h3 {
          font-size: 2rem;
          margin: 2rem 2.9rem;
        }

        .newsletter input{
          background: #efefef;
        }

        .fullwidth{
          width: 100%
        }

        @media screen and (min-width: 900px){
          .sidebar-container{
            width: 375px;
          }

          .divider-container{
            flex-direction: row;
          }

          .left-container{
            width: 100%;
          }

          .mr-2{
            margin-right: 2rem !important;
          }

          .newsletter{
            padding: 0 2.4rem;
          }
        }
      `}</style>
    </>
  );
}