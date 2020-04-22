import Head from 'next/head';

//custom components
import Layout from '../components/partials/Layout';

export default function About() {
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
          </div>
        </section>
      </Layout>
      <style jsx>{`
        .header-space{
          height: 7.2rem;
        }

        @media screen and (min-width: 900px){
          .header-space{
            height: 10rem;
          }
        }
      `}</style>
    </>
  );
}