

export default function Header(props){
  return (
    <>
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
              <li className="nav-item nav-dropdown">
                <button href="#" className="nav-link">Мэдээ<i className="fa fa-caret-down"></i></button>
                <div className="dropdown__content">
                  <div className="container">
                    <div className="dropdown__row">
                      <div className="dropdown__column">
                        <h3>Category 1</h3>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                      </div>
                      <div className="dropdown__column">
                        <h3>Category 2</h3>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                      </div>
                      <div className="dropdown__column">
                        <h3>Category 3</h3>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item nav-dropdown">
                <button href="#" className="nav-link">Gaming PC<i className="fa fa-caret-down"></i></button>
                
                <div className="dropdown__content">
                  <div className="container">
                    <div className="dropdown__row">
                      <div className="dropdown__column">
                        <h3>Өөрийн</h3>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                      </div>
                      <div className="dropdown__column">
                        <h3>Category 2</h3>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                      </div>
                      <div className="dropdown__column">
                        <h3>Category 3</h3>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                      </div>
                      <div className="dropdown__column">
                        <h3>Category 3</h3>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                      </div>
                      <div className="dropdown__column">
                        <h3>Category 3</h3>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                      </div>
                    </div>
                  </div>
                </div>
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
      <style jsx>{`
        header{
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          background-image: linear-gradient(to bottom, rgba(0,0,0,.5), transparent);
        }
        
        .nav{
          height: 7.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .menu-toggle{
          color: #fff;
          font-size: 2.2rem;
          position: fixed;
          top: 3rem;
          transform: translateY(-50%);
          right: 2.5rem;
          cursor: pointer;
          z-index: 1500;
        }
        
        .fa-times{
          display: none;
        }
        
        .nav-list{
          list-style: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background-color: var(--main-font-color-dark);
          padding: 4.4rem;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          z-index: 1250;
          transform: translateY(-100%);
          transition: transform .5s;
        }
        
        .nav::before{
          content: "";
          position: fixed;
          top: 0;
          left: 0; 
          width: 100vw;
          height: 100vh;
          background-color: rgba(0,0,0,.8);
          z-index: 1000;
          opacity: 0;
          transform: scale(0);
          transition: opacity .5s;
        }
        
        .open .fa-times{
          display: block;
        }
        
        .open .fa-bars{
          display: none;
        }
        
        .open .nav::before{
          opacity: 1;
          transform: scale(1);
        }
        
        .open .nav-list{
          transform: translateY(0);
        }
        
        .nav-item{
          padding: 1rem 0;
          border-bottom: 2px solid rgba(255,255,255,.3);
        }
        
        .nav-link{
          display: block;
          color: #fff;
          text-transform: uppercase;
          font-size: 1.6rem;
          letter-spacing: 2px;
          margin-right: -2px;
          transition: color .5s;
        }
        
        .nav-link:hover{
          color: var(--secondary-font-color)
        }
        
        .nav-item > button{
          background-color: transparent;
          border: none;
        }
        
        .nav-item > button:active,
        .nav-item > button:focus{
          border: none;
          outline: none;
        }
        
        .dropdown__content {
          display: none;
          padding-left: 1rem;
        }
        
        .nav-dropdown.clicked .dropdown__content {
          display: block;
        }
        
        .dropdown__column {
          color: #fff;
          font-size: 1.6rem;
          font-weight: 100;
          display: flex;
          flex-direction: column;
        }
        
        
        .dropdown__column h3{
          font-weight: 100 !important;
        }
        
        .dropdown__column a{
          color: #fff;
          padding: .5rem 0;
          transition: color .5s;
        }
        
        
        .dropdown__column a:hover{
          color: var(--secondary-font-color);
        }


        @media screen and (min-width: 900px){
          .menu-toggle{
            display: none;
          }
        
          .nav{
            justify-content: space-between;
          }
        
          .nav-list{
            position: initial;
            width: initial;
            height: initial;
            background-color: transparent;
            padding: 0;
            justify-content: initial;
            flex-direction: row;
            transform: initial;
            transition: initial;
          }
        
          .nav-item{
            margin: 0 2.4rem;
            border: none;
          }
        
          .nav-item:last-child{
            margin-right: 0;
          }
        
          .nav-link{
            font-size: 1.3rem;
          }
        
          .active{
            position: relative;
          }
        
          .active::before{
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: #fff;
            left: 0;
            bottom: -3px;
          }
        
          .dropdown__content {
            margin: 0;
            padding: 0;
            display: none !important;
            position: absolute;
            background-color: transparent;
            width: 100%;
            left: 0;
            top: 6rem;
            flex-direction: row;
          }
          
          .nav-dropdown.clicked .dropdown__content {
            display: flex !important;
          }
        
          .dropdown__column {
            color: #fff;
            font-size: 1.6rem;
            font-weight: 100;
            display: flex;
            flex-direction: column;
          }
        
          .dropdown__column a {
          }
        
          .dropdown__row {
            padding: 2rem 4rem 3rem 4rem;
            background-color: rgba(0,0,0,.8);
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
        }
      `}</style>
    </>
  );
}