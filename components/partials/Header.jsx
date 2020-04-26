import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header(props = {}){

  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (event) => {
    let scrollTop = event.currentTarget.scrollY;

    if (scrollTop > 50) setIsScrolled(true);
    else setIsScrolled(false);
  };

  const dropDownHandle = (e) => {
    handleClose();
    if(!dropdown) {
      e.currentTarget.parentNode.classList.add('clicked');
    } else {
      e.currentTarget.parentNode.classList.remove('clicked');
    }
    setDropdown(!dropdown);
  }

  const handleClose = () => {
    let li = document.querySelector('.nav-dropdown.clicked');
    if(li){
      li.classList.remove('clicked');
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const nestedCategory = (route) => {
    let subCategories = [];

    for(let subRoute of route.children){
      let subSubCategory = [];
      if(subRoute.children || subRoute.children.length) {
        for(let subSubRoute of subRoute.children){
          subSubCategory.push(<Link key={subSubRoute.name} href={subSubRoute.href}><a>{subSubRoute.name}</a></Link>);
        }
      }
      
      subCategories.push(
        <div key={subRoute.name} className="dropdown__column">
          <Link key={subRoute.name + '12'} href={subRoute.href}><a><h3>{subRoute.name}</h3></a></Link>
          {subSubCategory}
        </div>
      );
    }

    return (
      <li key={route.name} className="nav-item nav-dropdown">
        <button className="nav-link" onClick={(e)=> { dropDownHandle(e) }}>{route.name}<i
            className="fa fa-caret-down"></i></button>
        <div className="dropdown__content">
          <div className="container">
            <div className="dropdown__row">
              {subCategories}
            </div>
          </div>
        </div>
      </li>
    );
  }

  let body = props.routes.map(route => {
    if(route.children && route.children.length) {
      return nestedCategory(route);
    } else {
      return <li key={route.name}  className="nav-item">
        <Link href={route.href}><a className="nav-link">{route.name}</a></Link>
      </li>
    }
  })

  return (
  <>
    <header className={(toggle ? 'open ' : '' ) + (isScrolled ? 'nav-fixed ' : '' ) + (dropdown ? 'nav-none-transparent '
      : '' ) + (props.navHideTransparent ? 'nav-none-transparent ' : '' )}>
      <div className="container">
        <nav className="nav">
          <div className="menu-toggle" onClick={()=> {setToggle(!toggle)}}>
            <i className="fas fa-bars"></i>
            <i className="fas fa-times"></i>
          </div>
          <Link href="/"><a className="logo">
            <img src="/images/logo-rosa.png" className="logo" alt="" />
          </a>
          </Link>
          <ul className="nav-list">
           {body}
          </ul>
        </nav>
      </div>
    </header>
    <style jsx>
      {` 
        :global(header) {
          width: 100%;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1;
          background-image: linear-gradient(to bottom, rgba(0, 0, 0, .5), transparent);
          transition: all .5s;
        }

        :global(.nav-none-transparent) {
          background-image: initial;
          background: #000;
        }

        :global(.nav) {
          height: 7.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all .5s;
        }

        :global(.menu-toggle) {
          color: #fff;
          font-size: 2.2rem;
          position: fixed;
          top: 3rem;
          transform: translateY(-50%);
          right: 2.5rem;
          cursor: pointer;
          z-index: 1500;
        }

        :global(.fa-times) {
          display: none;
        }

        :global(.nav-list) {
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

        :global(.nav::before) {
          content: "";
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, .8);
          z-index: 1000;
          opacity: 0;
          transform: scale(0);
          transition: opacity .5s;
        }

        :global(.open .fa-times) {
          display: block;
        }

        :global(.open .fa-bars) {
          display: none;
        }

        :global(.open .nav::before) {
          opacity: 1;
          transform: scale(1);
        }

        :global(.open .nav-list) {
          transform: translateY(0);
        }

        :global(.nav-item) {
          padding: 1rem 0;
          border-bottom: 2px solid rgba(255, 255, 255, .3);
        }

        :global(.nav-link) {
          display: block;
          color: #fff;
          text-transform: uppercase;
          font-size: 1.6rem;
          letter-spacing: 2px;
          margin-right: -2px;
          transition: color .5s;
        }

        :global(.nav-link:hover) {
          color: var(--secondary-font-color)
        }

        :global(.nav-item>button) {
          background-color: transparent;
          border: none;
        }

        :global(.nav-item>button:active,
        .nav-item>button:focus) {
          border: none;
          outline: none;
        }

        :global(.dropdown__content) {
          display: none;
          padding-left: 1rem;
        }

        :global(.nav-dropdown.clicked .dropdown__content) {
          display: block;
        }

        :global(.dropdown__column) {
          color: #fff;
          font-size: 1.6rem;
          font-weight: 100;
          display: flex;
          flex-direction: column;
        }

        :global(.dropdown__column a) {
          color: #fff;
          padding: .5rem 0;
          transition: color .5s;
        }

        :global(.dropdown__column h3) {
          font-weight: 100 !important;
        }

        :global(.dropdown__column a:hover) {
          color: var(--secondary-font-color);
        }


        @media screen and (min-width: 900px) {

          :global(.menu-toggle) {
            display: none;
          }

          :global(.nav) {
            height: 10rem;
            justify-content: space-between;
          }

          :global(.nav-list) {
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

          :global(.nav-fixed) {
            background: #000 !important;
          }

          :global(.nav-fixed .nav) {
            height: 7.2rem;
          }

          :global(.nav-item) {
            margin: 0 2.4rem;
            border: none;
          }

          :global(.nav-item:last-child) {
            margin-right: 0;
          }

          :global(.nav-link) {
            font-size: 1.3rem;
          }

          :global(.active) {
            position: relative;
          }

          :global(.active::before) {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: #fff;
            left: 0;
            bottom: -3px;
          }

          :global(.dropdown__content) {
            margin: 0;
            padding: 0;
            display: none !important;
            position: absolute;
            background-color: transparent;
            width: 100%;
            left: 0;
            top: 9rem;
            flex-direction: row;
          }

          :global(.nav-fixed .dropdown__content) {
            top: 7rem;
          }

          :global(.nav-dropdown.clicked .dropdown__content) {
            display: flex !important;
          }

          :global(.dropdown__column) {
            color: var(--main-font-color-dark);
            font-size: 1.6rem;
            font-weight: 100;
            display: flex;
            flex-direction: column;
            border-right: 1px solid var(--body-font-color);
            padding: 0 1rem
          }

          :global(.dropdown__column a) {
            color: #fff;
          }

          :global(.dropdown__column h3) {
            margin-bottom: 2rem;
            color: var(--secondary-font-color);
          }

          :global(.dropdown__row) {
            padding: 2rem 4rem 3rem 4rem;
            background-color: var(--main-font-color-dark);
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            border-radius: 1rem;
          }
        }
      `}</style>
  </>
  );
}