import React, {useEffect, useState} from "react"; 
import "../src/styles/nnavbar.css";
// import { Link } from "react-router-dom";
// import Events from "./Portfolios/WeddingEvents";




function NNavbar() {

            const [show, setShow] =useState(true);
            // const [display, setDisplay ] = useState( 'none' );
            const [lastScrollY, setLastScrollY]=useState(0);





            // function handleClick() {
            //     if ( display === 'none' ) {
            //         setDisplay( 'inline-block' )
            //     } else {
            //         setDisplay( 'none' )
            //     }
            // };

const navControler =()=>{
if(typeof window !== 'undefined'){if (window.scrollY > lastScrollY){
    setShow(false);}
else{
    setShow(true);
   }
   setLastScrollY(window.scrollY);
}
 };

 useEffect(()=>{
     if(typeof window !=='undefined'){
         window.addEventListener('scroll', navControler);

         return()=>{
             window.removeEventListener('scroll', navControler)
         };
     }
 }, [lastScrollY]); 



            return (    
                <nav className={`nav__container ${show && 'hiddenn'}`}>


<div className="nav__container__item">
    <ul className="nav__container__item__top ">
    <li className="nav__icon"> <span className="fs-8">SOLIS</span></li> 
        <li className="nav__container__item__top__text">Your Education, Our passion </li>
        <li className="nav__container__button">
            <li className="nav__button">ENROLLMENT</li>
        </li>
    
    </ul>
    <div className="nav-wrap"></div>
    <div className="nav__container__item__bottom__main">
        <ul className="nav__container__item__bottom">
            <li className="nav__container__item__bottom__content">About us </li>
            <li   className="nav__container__item__bottom__content yoo" > Academics &darr;  
            
            <div  className="nav__submenu1" style={{display: 'inline-block' }}> 
                <ul  style={{display:"grid"}}>
                    <li className='nav__submenu__item'>Wedding Portfolio </li>
                    <li className='nav__submenu__item'>PreWedding Portfolio </li>
                    <li  className='nav__submenu__item'>Portrait Portfolio  </li>
                    <li className='nav__submenu__item'>Product Portfolio  </li>
                    <li className='nav__submenu__item'>Traditional Portfolio  </li>
                </ul>
            
            </div>

             </li>
        <li className="nav__container__item__bottom__content">News</li>
        <li className="nav__container__item__bottom__content">Location</li>
            <li className="nav__container__item__bottom__content">Get Involved</li>
            <li  className="nav__container__item__bottom__content  nav__container__button yoo1">About Us 
            
            <div  className="nav__submenu" style={{display: 'inline-block' }}> 
                <ul  style={{display:"grid"}}>
                    <li className='nav__submenu__item'>Wedding Portfolio </li>
                    <li className='nav__submenu__item'>PreWedding Portfolio </li>
                    <li  className='nav__submenu__item'>Portrait Portfolio  </li>
                    <li className='nav__submenu__item'>Product Portfolio  </li>
                    <li className='nav__submenu__item'>Traditional Portfolio  </li>
                </ul>
            
            </div>

              </li>


        </ul>

</div>
</div> 

</nav>
)
};

        export default NNavbar;