import React,{useEffect} from "react";
import "../src/styles/Footer.css";
import Aos from "aos";
import "aos/dist/aos.css";



   

function Footer() {

     useEffect(() => {
        Aos.init({duration:700});
     }, [])
    
    return (
        <div className="footer">
             <div data-aos="fade-up" className="rowf fcenter-text wrap">
                <div className="footer-col-1-4"><p className= "footer-p">About Us</p></div>
           <div className="footer-col-1-4"><p className= "footer-p">Academics</p></div>
         <div className="footer-col-1-4"><p className= "footer-p">All about cars</p></div>
         <div className="footer-col-1-4"><p className= "footer-p">Discover More</p></div>
  </div>
             <div data-aos="fade-up" className="rowf center-text space">
                <div className="footer-col-1-4"><ul className="footer-list">
                    <li className=" footer__list-child">Browse</li>
                    <li className=" footer__list-child">Evergree</li>
                    <li className=" footer__list-child">Sports</li>
                    <li className=" footer__list-child">Driving events</li>
                <li className=" footer__list-child">something</li></ul>
                </div>
                <div className="footer-col-1-4">
                    <ul className="footer-list">
                    <li className=" footer__list-child">Browse</li>
                    <li className="footer__list-child ">Evergree</li>
                    <li className="footer__list-child  ">Sports</li>
                    <li className=" footer__list-child ">Driving events</li>
                <li className=" footer__list-child ">something</li></ul>
                </div>
                                <div className="footer-col-1-4">
                    <ul className="footer-list">
                    <li className=" footer__list-child">Browse</li>
                    <li className=" footer__list-child">Evergree</li>
                    <li className=" footer__list-child">Sports</li>
                    <li className=" footer__list-child">Driving events</li>
                <li className=" footer__list-child">something</li></ul>
                </div>
                                <div className="footer-col-1-4">
                    <ul className= "footer-list">
                    <li className=" footer__list-child">Browse</li>
                    <li className=" footer__list-child">Evergree</li>
                    <li className=" footer__list-child">Sports</li>
                    <li className=" footer__list-child">Driving events</li>
                <li className=" footer__list-child">something</li></ul>
        </div>
            </div> 

            <div data-aos="fade-up" className="wrap">
              <h2 className= "footer-p">Stay Informed</h2>  
  </div>
            <div data-aos="fade-up" className="space">
                <p className=" footer__list-child"> Follow us and use the following social media to get in</p> 
                <div><p className=" footer__list-child"> contact with us and share how much you love our product, your passion for our brand</p></div>
                <ul className="footer-logo">
                    <li className="ion-logo-instagram big"></li>
                     <li className="ion-logo-twitter big"></li>
                    <li className="ion-logo-linkedin big"></li>
                    <li className="ion-logo-facebook big"></li>
                </ul>
                      <div data-aos="fade-up" className="wrap widerSpace up"></div>
            </div>
                      <div data-aos="fade-up" className="wrap widerSpace">
                <div className="footer-group">
                    <h2 className="footer-company f1">IVM</h2>
                    <h2 className="footer-company">FOLIS</h2>
                    <h2 className="footer-company f3">ROY</h2>
              </div>
            </div>
          
        </div>
       
    )
};

export default Footer;