export default function Footer(){
  return (
    <>
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
      <style jsx>{`
        footer{
          padding: 7rem 0 2rem 0;
          background-color: #121212;
          color: #fff;
          position: relative;
          text-align: center;
        }

        .back-to-top{
          width: 7rem;
          height: 7rem;
          background-color: #121212;
          position: absolute;
          top: -3rem;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 50%;
        }

        .back-to-top i{
          display: block;
          color: #fff;
          font-size: 2rem;
          padding: 2rem;
        }

        .footer-content{
          /* overflow: hidden; */
        }

        footer h4{
          font-size: 1.9rem;
          text-transform: uppercase;
          font-weight: 100;
          letter-spacing: 3px;
          margin-right: -3px;
          margin-bottom: 2rem;
        }

        .footer-container-about{
          margin-bottom: 2.4rem;
        }

        .footer-container-about p{
          line-height: 2;
        }

        .social-icons{
          list-style: none;
          margin-bottom: 5.4rem;
          display: flex;
          justify-content: center;
        }

        .social-icons i{
          font-size: 2rem;
          color: #fff;
          padding: .8rem 2rem;
          opacity: .5;
          transition: color .5s;
        }

        .social-icons i:hover,
        .social-icons i:focus{
          color: var(--secondary-font-color)
        }

        .category-ul{
          list-style: none;
          margin-bottom: 1.4rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .category-ul li {
          text-transform: uppercase;
          margin: .5rem 0;
          letter-spacing: .2rem;
          color: #fff;
          transition: color .5s;
        }

        .category-ul li:hover{
          color: var(--secondary-font-color)
        }

        /* Media query */
        @media screen and (min-width: 900px){
          .footer-content{
            max-width: 77.5rem;
            margin: auto;
          }

          .footer-container-about{
            max-width: 51.3rem;
            margin: 0 auto 5.4rem;
          }

          .footer-content-divider{
            display: flex;
            justify-content: center;
          }

          .category-container{
            padding-right: 3.4rem;
          }

          .category-ul li {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </>
  );
}