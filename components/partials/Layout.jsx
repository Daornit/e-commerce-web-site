import Header from './Header'
import Footer from './Footer'

export default function Layout(props){
  return (
    <>
      <Header navHideTransparent={props.navHideTransparent} routes={props.routes}/>
        {props.children}
      <Footer/>
    </>
  );
}