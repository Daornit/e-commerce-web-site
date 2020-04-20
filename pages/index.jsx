import Head from 'next/head'
import Carousel from 'react-multi-carousel';

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
    <>
      <Head>
        <meta charSet="UTF-8"/>>
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <title>E-Commerce</title>
        {/* <!--Font awesome CDN--> */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"/>
        {/* <!--Scroll reveal CDN--> */}
        <script src="https://unpkg.com/scrollreveal"></script>
        <script src="/main.js"></script>
      </Head>
      
      <header>
        <div className="container">
          <nav className="nav">
            <div className="menu-toggle">
              <i className="fas fa-bars"></i>
              <i className="fas fa-times"></i>
            </div>
            <a href="#" className="logo">
              <img src="/images/logo-rosa.png" className="logo" alt=""/>
            </a>
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#" className="nav-link active">Нүүр</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Мэдээ</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Gaming PC</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Gaming Laptop</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Холбоо барих</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Бидний тухай</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
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
          <div className="section-header">
            <h4 className="section-headline">
              Цаг үеэ олсон
            </h4>
            <div className="line-custom"></div>
          </div>
          <div className="trend-post-grid">
            <a href="#" className="trend-post-link-grid-item">
              <div className="post-card">
                <img src="/images/post-bg-1.jpeg" className="post-card-background" alt=""/>
                <div className="post-content">
                  <h2 className="post-title">LG best reviews in 2020</h2>
                  <p className="post-author">зохиолч Д.Соёмбо</p>
                </div>
              </div>
            </a>
            
            <a href="#" className="trend-post-link-grid-item">
              <div className="post-card">
                <img src="/images/post-bg-2.jpeg" className="post-card-background" alt=""/>
                <div className="post-content">
                  <h2 className="post-title">LG best reviews in 2020</h2>
                  <p className="post-author">зохиолч Д.Соёмбо</p>
                </div>
              </div>
            </a>

            <a href="#" className="trend-post-link-grid-item">
              <div className="post-card">
                <img src="/images/post-bg-3.jpeg" className="post-card-background" alt=""/>
                <div className="post-content">
                  <h2 className="post-title">LG best reviews in 2020</h2>
                  <p className="post-author">зохиолч Д.Соёмбо</p>
                </div>
              </div>
            </a>
            <a href="#" className="trend-post-link-grid-item">
              <div className="post-card">
                <img src="/images/post-bg-4.jpeg" className="post-card-background" alt=""/>
                <div className="post-content">
                  <h2 className="post-title">LG best reviews in 2020</h2>
                  <p className="post-author">зохиолч Д.Соёмбо</p>
                </div>
              </div>
            </a>
            <a href="#" className="trend-post-link-grid-item">
              <div className="post-card">
                <img src="/images/post-bg-5.jpeg" className="post-card-background" alt=""/>
                <div className="post-content">
                  <h2 className="post-title">LG best reviews in 2020</h2>
                  <p className="post-author">зохиолч Д.Соёмбо</p>
                </div>
              </div>
            </a>
            <a href="#" className="trend-post-link-grid-item">
              <div className="post-card">
                <img src="/images/post-bg-6.jpeg" className="post-card-background" alt=""/>
                <div className="post-content">
                  <h2 className="post-title">LG best reviews in 2020</h2>
                  <p className="post-author">зохиолч Д.Соёмбо</p>
                </div>
              </div>
            </a>
            
            <a href="#" className="trend-post-link-grid-item">
              <div className="post-card">
                <img src="/images/post-bg-7.jpeg" className="post-card-background" alt=""/>
                <div className="post-content">
                  <h2 className="post-title">LG best reviews in 2020</h2>
                  <p className="post-author">зохиолч Д.Соёмбо</p>
                </div>
              </div>
            </a>
            <a href="#" className="trend-post-link-grid-item">
              <div className="post-card">
                <img src="/images/post-bg-8.jpeg" className="post-card-background" alt=""/>
                <div className="post-content">
                  <h2 className="post-title">LG best reviews in 2020</h2>
                  <p className="post-author">зохиолч Д.Соёмбо</p>
                </div>
              </div>
            </a>
            <a href="#" className="trend-post-link-grid-item">
              <div className="post-card">
                <img src="/images/post-bg-9.jpeg" className="post-card-background" alt=""/>
                <div className="post-content">
                  <h2 className="post-title">LG best reviews in 2020</h2>
                  <p className="post-author">зохиолч Д.Соёмбо</p>
                </div>
              </div>
            </a>

            <a href="#" className="trend-post-link-grid-item">
              <div className="post-card">
                <img src="/images/post-bg-10.jpeg" className="post-card-background" alt=""/>
                <div className="post-content">
                  <h2 className="post-title">2020 оны хамгийн шилдэг утаснууд</h2>
                  <p className="post-author">зохиолч Д.Соёмбо</p>
                </div>
              </div>
            </a>
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
          <div className="section-header">
            <h4 className="section-headline">
              Өндөр үнэлгээтэй
            </h4>
            <div className="line-custom"></div>
          </div>
          <div>
            <Carousel responsive={responsive}>
              <a href="#" className="rated-post-link">
                <div className="rated-card">
                  <img src="/images/post-bg-1.jpeg" className="rated-post-img" alt=""/>
                  <div className="rated-post-content">
                    <div className="rated-post-review">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </div>
                    <h2 className="rated-post-title">2020 оны хамгийн шилдэг утаснууд</h2>
                    <p className="rated-post-author">зохиолч Д.Соёмбо</p>
                  </div>
                </div>
              </a>

              <a href="#" className="rated-post-link">
                <div className="rated-card">
                  <img src="/images/post-bg-2.jpeg" className="rated-post-img" alt=""/>
                  <div className="rated-post-content">
                    <div className="rated-post-review">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </div>
                    <h2 className="rated-post-title">2020 оны хамгийн шилдэг утаснууд</h2>
                    <p className="rated-post-author">зохиолч Д.Соёмбо</p>
                  </div>
                </div>
              </a>

              <a href="#" className="rated-post-link">
                <div className="rated-card">
                  <img src="/images/post-bg-3.jpeg" className="rated-post-img" alt=""/>
                  <div className="rated-post-content">
                    <div className="rated-post-review">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </div>
                    <h2 className="rated-post-title">2020 оны хамгийн шилдэг утаснууд</h2>
                    <p className="rated-post-author">зохиолч Д.Соёмбо</p>
                  </div>
                </div>
              </a>

              <a href="#" className="rated-post-link">
                <div className="rated-card">
                  <img src="/images/post-bg-4.jpeg" className="rated-post-img" alt=""/>
                  <div className="rated-post-content">
                    <div className="rated-post-review">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </div>
                    <h2 className="rated-post-title">2020 оны хамгийн шилдэг утаснууд</h2>
                    <p className="rated-post-author">зохиолч Д.Соёмбо</p>
                  </div>
                </div>
              </a>
            </Carousel>
          </div>
        </div>
      </section>
      {/* Rated post section ends */}

      <section className="popular-post-section">
        <div className="container">
          <div className="section-header">
            <h4 className="section-headline">
              Хамгийн их хандалттай
            </h4>
            <div className="line-custom"></div>
          </div>
          <div>
            <Carousel responsive={responsive}>
              <a href="#" className="rated-post-link">
                <div className="popular-card">
                  <div className="popular-post-img-wrapper">
                    <img src="/images/post-bg-2.jpeg" className="popular-post-img" alt=""/>
                  </div>
                  
                  <div className="rated-post-content">
                    <div className="popular-post-access">
                      <span className="fa fa-eye"></span> 100154
                    </div>
                    <h2 className="rated-post-title">2020 оны хамгийн шилдэг утаснууд</h2>
                    <p className="rated-post-author">зохиолч Д.Соёмбо</p>
                  </div>
                </div>
              </a>

              <a href="#" className="rated-post-link">
                <div className="rated-card">
                  <div className="popular-post-img-wrapper">
                    <img src="/images/post-bg-9.jpeg" className="popular-post-img" alt=""/>
                  </div>
                  <div className="rated-post-content">
                    <div className="popular-post-access">
                      <span className="fa fa-eye"></span> 100154
                    </div>
                    <h2 className="rated-post-title">2020 оны хамгийн шилдэг утаснууд</h2>
                    <p className="rated-post-author">зохиолч Д.Соёмбо</p>
                  </div>
                </div>
              </a>

              <a href="#" className="rated-post-link">
                <div className="rated-card">
                  <div className="popular-post-img-wrapper">
                    <img src="/images/post-bg-10.jpeg" className="popular-post-img" alt=""/>
                  </div>
                  <div className="rated-post-content">
                    <div className="popular-post-access">
                      <span className="fa fa-eye"></span> 100154
                    </div>
                    <h2 className="rated-post-title">2020 оны хамгийн шилдэг утаснууд</h2>
                    <p className="rated-post-author">зохиолч Д.Соёмбо</p>
                  </div>
                </div>
              </a>

              <a href="#" className="rated-post-link">
                <div className="rated-card">
                  <div className="popular-post-img-wrapper">
                    <img src="/images/post-bg-4.jpeg" className="popular-post-img" alt=""/>
                  </div>
                  <div className="rated-post-content">
                    <div className="popular-post-access">
                      <span className="fa fa-eye"></span> 100154
                    </div>
                    <h2 className="rated-post-title">2020 оны хамгийн шилдэг утаснууд</h2>
                    <p className="rated-post-author">зохиолч Д.Соёмбо</p>
                  </div>
                </div>
              </a>
            </Carousel>
          </div>
        </div>
      </section>
      {/* popular post ends */}

      <section className="popular-post-section">
        <div className="container">
          <div className="section-header">
            <h4 className="section-headline">
              Сүүлийн үеийн нийтлэл
            </h4>
            <div className="line-custom"></div>
          </div>
          <div className="latest-posts">
            <div className="latest-posts-controller padding-right">

              <div className="latest-post-card">
                <div className="rated-post-content">
                  <h2 className="rated-post-title">
                    <a href="#" className="latest-post-link">
                      2020 оны хамгийн шилдэг утаснууд
                    </a>
                  </h2>
                  <p className="latest-post-short-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed soluta beatae optio corporis, libero maiores iste voluptatem.</p>
                  <p className="rated-post-author">зохиолч Д.Соёмбо</p>
                  <p className="latest-post-date">2020-05-04</p>
                </div>
                
                <div className="latest-post-img-wrapper">
                  <img src="/images/post-bg-4.jpeg" className="popular-post-img latest-post-img" alt=""/>
                </div>
              </div>

              <div className="latest-post-card">
                <div className="rated-post-content">
                  <h2 className="rated-post-title">
                    <a href="#" className="latest-post-link">
                      2020 оны хамгийн шилдэг утаснууд
                    </a>
                  </h2>
                  <p className="latest-post-short-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed soluta beatae optio corporis, libero maiores iste voluptatem.</p>
                  <p className="rated-post-author">зохиолч Д.Соёмбо</p>
                  <p className="latest-post-date">2020-05-04</p>
                </div>
                
                <div className="latest-post-img-wrapper">
                  <img src="/images/post-bg-5.jpeg" className="popular-post-img latest-post-img" alt=""/>
                </div>
              </div>
              <div className="latest-post-card">
                <div className="rated-post-content">
                  <h2 className="rated-post-title">
                    <a href="#" className="latest-post-link">
                      2020 оны шилдэг LG Gaming Laptop
                    </a>
                  </h2>
                  <p className="latest-post-short-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed soluta beatae optio corporis, libero maiores iste voluptatem.</p>
                  <p className="rated-post-author">зохиолч Д.Соёмбо</p>
                  <p className="latest-post-date">2020-05-04</p>
                </div>
                
                <div className="latest-post-img-wrapper">
                  <img src="/images/post-bg-10.jpeg" className="popular-post-img latest-post-img" alt=""/>
                </div>
              </div>

              <div className="latest-post-card">
                <div className="rated-post-content">
                  <h2 className="rated-post-title">
                    <a href="#" className="latest-post-link">
                      2020 оны шилдэг LG Gaming Laptop
                    </a>
                  </h2>
                  <p className="latest-post-short-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed soluta beatae optio corporis, libero maiores iste voluptatem.</p>
                  <p className="rated-post-author">зохиолч Д.Соёмбо</p>
                  <p className="latest-post-date">2020-05-04</p>
                </div>
                
                <div className="latest-post-img-wrapper">
                  <img src="/images/post-bg-2.jpeg" className="popular-post-img latest-post-img" alt=""/>
                </div>
              </div>

              <div className="latest-post-card">
                <div className="rated-post-content">
                  <h2 className="rated-post-title">
                    <a href="#" className="latest-post-link">
                      2020 оны шилдэг LG Gaming Laptop
                    </a>
                  </h2>
                  <p className="latest-post-short-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed soluta beatae optio corporis, libero maiores iste voluptatem.</p>
                  <p className="rated-post-author">зохиолч Д.Соёмбо</p>
                  <p className="latest-post-date">2020-05-04</p>
                </div>
                
                <div className="latest-post-img-wrapper">
                  <img src="/images/post-bg-6.jpeg" className="popular-post-img latest-post-img" alt=""/>
                </div>
              </div>

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
      
      <footer>
        <div className="container">
          <div className="back-to-top">
            <a href="#banner-section"><i className="fas fa-chevron-up"></i></a>
          </div>
          
          <div className="footer-content-divider">
            <div className="footer-content">
              <div className="footer-container-about">
                <h4>NewsTech.tech тухай</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus vel vero unde quis voluptatibus repellat dolore fugiat aliquam consectetur, itaque beatae quasi laboriosam harum nobis aspernatur, voluptatum magnam at maxime.</p>
              </div>
            </div>
            <div className="category-container">
              <h4>Ангилалууд</h4>
              <ul className="category-ul">
                <a href="#"><li>Caming PC</li></a>
                <a href="#"><li>Caming Laptop</li></a>
                <a href="#"><li>Phone recommendation</li></a>
                <a href="#"><li>Xbox reviews</li></a>
                <a href="#"><li>Some shit</li></a>
              </ul>
            </div>
          </div>

          <div className="social-media">
            <h4>Биднийг дагах</h4>
            <ul className="social-icons">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-facebook-square"></i></a>
              <a href="#"><i className="fab fa-pinterest"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-tripadvisor"></i></a>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}