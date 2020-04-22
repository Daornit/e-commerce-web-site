import Header from './Header'
import Footer from './Footer'

export default function Layout(props){
  return (
    <>
      <Header navHideTransparent={props.navHideTransparent}/>
        {props.children}
      <Footer/>
    </>
  );
}