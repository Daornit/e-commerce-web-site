import Head from 'next/head';
import Carousel from 'react-multi-carousel';

//custom components
import Layout from '../components/partials/Layout';
import TrendPost from '../components/post/TrendPost';
import RatedPost from '../components/post/RatedPost';
import PopularPost from '../components/post/PopularPost';
import LatestPost from '../components/post/LatestPost';
import SectionHeader from '../components/section/SectionHeader';

export default function Index() {

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

  return (
    <Layout>
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
      
      {/* Header ends */}
      <section className="banner-section" id="banner-section">
        <div className="container">
          <img src="/images/banner-background.jpeg" className="banner-background" alt=""/>
          <div className="banner-post">
            <a href="#" className="link-post-title">
              Lorem ipsum dolor, sit amet consectetur adipisicing
            </a>
            <p className="post-author">
              зохиогч Д.Бат-Оргил
            </p>
          </div>
        </div>
      </section>
      {/* Banner post ends */}
      <section className="trend-post-section">
        <div className="container">
          <SectionHeader title='Цаг үеэ олсон'/>
          <div className="trend-post-grid">
            <TrendPost coverImg="/images/post-bg-1.jpeg" title="LG best reviews in 2020" author="Д.Соёмбо"/>
            <TrendPost coverImg="/images/post-bg-2.jpeg" title="LG best reviews in 2020" author="Д.Соёмбо"/>
            <TrendPost coverImg="/images/post-bg-3.jpeg" title="LG best reviews in 2020" author="Д.Соёмбо"/>
            <TrendPost coverImg="/images/post-bg-4.jpeg" title="LG best reviews in 2020" author="Д.Соёмбо"/>
            <TrendPost coverImg="/images/post-bg-5.jpeg" title="LG best reviews in 2020" author="Д.Соёмбо"/>
            <TrendPost coverImg="/images/post-bg-6.jpeg" title="LG best reviews in 2020" author="Д.Соёмбо"/>
            <TrendPost coverImg="/images/post-bg-7.jpeg" title="LG best reviews in 2020" author="Д.Соёмбо"/>
            <TrendPost coverImg="/images/post-bg-8.jpeg" title="LG best reviews in 2020" author="Д.Соёмбо"/>
            <TrendPost coverImg="/images/post-bg-9.jpeg" title="LG best reviews in 2020" author="Д.Соёмбо"/>
            <TrendPost coverImg="/images/post-bg-10.jpeg" title="LG best reviews in 2020" author="Д.Соёмбо"/>
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
              <RatedPost coverImg="/images/post-bg-10.jpeg" title="2020 оны хамгийн шилдэг утаснууд" author="Д.Соёмбо" review={5}/>
              <RatedPost coverImg="/images/post-bg-2.jpeg" title="2020 оны хамгийн шилдэг утаснууд" author="Д.Соёмбо" review={4}/>
              <RatedPost coverImg="/images/post-bg-7.jpeg" title="2020 оны хамгийн шилдэг утаснууд" author="Д.Соёмбо" review={3}/>
              <RatedPost coverImg="/images/post-bg-3.jpeg" title="2020 оны хамгийн шилдэг утаснууд" author="Д.Соёмбо" review={5}/>
              <RatedPost coverImg="/images/post-bg-4.jpeg" title="2020 оны хамгийн шилдэг утаснууд" author="Д.Соёмбо" review={2}/>
              <RatedPost coverImg="/images/post-bg-6.jpeg" title="2020 оны хамгийн шилдэг утаснууд" author="Д.Соёмбо" review={1}/>
              <RatedPost coverImg="/images/post-bg-5.jpeg" title="2020 оны хамгийн шилдэг утаснууд" author="Д.Соёмбо" review={3}/>
              <RatedPost coverImg="/images/post-bg-1.jpeg" title="2020 оны хамгийн шилдэг утаснууд" author="Д.Соёмбо" review={3}/>
              <RatedPost coverImg="/images/post-bg-8.jpeg" title="2020 оны хамгийн шилдэг утаснууд" author="Д.Соёмбо" review={5}/>
              <RatedPost coverImg="/images/post-bg-9.jpeg" title="2020 оны хамгийн шилдэг утаснууд" author="Д.Соёмбо" review={3}/>
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
              <PopularPost coverImg="/images/post-bg-9.jpeg" title="2020 оны хамгийн шилдэг утаснууд" author="Д.Соёмбо" viewCount={1024455}/> 
              <PopularPost coverImg="/images/post-bg-10.jpeg" title="2020 оны хамгийн шилдэг утаснууд" author="Д.Соёмбо" viewCount={455435}/> 
              <PopularPost coverImg="/images/post-bg-2.jpeg" title="2020 оны хамгийн шилдэг утаснууд" author="Д.Соёмбо" viewCount={5554455}/> 
              <PopularPost coverImg="/images/post-bg-1.jpeg" title="2020 оны хамгийн шилдэг утаснууд" author="Д.Соёмбо" viewCount={6821011}/> 
              <PopularPost coverImg="/images/post-bg-8.jpeg" title="2020 оны хамгийн шилдэг утаснууд" author="Д.Соёмбо" viewCount={800700}/> 
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
              <LatestPost coverImg="/images/post-bg-1.jpeg" title="2020 оны хамгийн шилдэг утаснууд" author="Д.Соёмбо" date="2020-05-12" shortDesc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed soluta beatae optio corporis, libero maiores iste voluptatem."/>
              <LatestPost coverImg="/images/post-bg-8.jpeg" title="2020 оны хамгийн шилдэг утаснууд" author="Д.Соёмбо" date="2020-05-12" shortDesc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed soluta beatae optio corporis, libero maiores iste voluptatem."/>
              <LatestPost coverImg="/images/post-bg-7.jpeg" title="2020 оны хамгийн шилдэг утаснууд" author="Д.Соёмбо" date="2020-05-12" shortDesc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed soluta beatae optio corporis, libero maiores iste voluptatem."/>
              <LatestPost coverImg="/images/post-bg-6.jpeg" title="2020 оны хамгийн шилдэг утаснууд" author="Д.Соёмбо" date="2020-05-12" shortDesc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed soluta beatae optio corporis, libero maiores iste voluptatem."/>
              <LatestPost coverImg="/images/post-bg-5.jpeg" title="2020 оны хамгийн шилдэг утаснууд" author="Д.Соёмбо" date="2020-05-12" shortDesc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed soluta beatae optio corporis, libero maiores iste voluptatem."/>
              <LatestPost coverImg="/images/post-bg-4.jpeg" title="2020 оны шилдэг LG Gaming Laptop" author="Д.Соёмбо" date="2020-05-12" shortDesc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed soluta beatae optio corporis, libero maiores iste voluptatem."/>
              <LatestPost coverImg="/images/post-bg-3.jpeg" title="2020 оны шилдэг LG Gaming Laptop" author="Д.Соёмбо" date="2020-05-12" shortDesc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed soluta beatae optio corporis, libero maiores iste voluptatem."/>
              <LatestPost coverImg="/images/post-bg-2.jpeg" title="2020 оны шилдэг LG Gaming Laptop" author="Д.Соёмбо" date="2020-05-12" shortDesc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed soluta beatae optio corporis, libero maiores iste voluptatem."/>
              <LatestPost coverImg="/images/post-bg-1.jpeg" title="2020 оны шилдэг LG Gaming Laptop" author="Д.Соёмбо" date="2020-05-12" shortDesc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed soluta beatae optio corporis, libero maiores iste voluptatem."/>
              <LatestPost coverImg="/images/post-bg-10.jpeg" title="2020 оны шилдэг LG Gaming Laptop" author="Д.Соёмбо" date="2020-05-12" shortDesc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed soluta beatae optio corporis, libero maiores iste voluptatem."/>
              <div className="latest-load-more-container">
                <a href="" className="btn">Цааш үзэх</a>
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