import React from 'react'
import "./gallery.css";
import Footer from "../Footer.js";
import Header from '../Header';
import image1 from "../../Image/p1.jpg";
import image2 from "../../Image/p2.jpg";
import image3 from "../../Image/p3.jpg";
import image4 from "../../Image/p4.jpg";
import image5 from "../../Image/p5.jpg";
import image6 from "../../Image/p6.jpg";
import image7 from "../../Image/p7.jpg";
import image8 from "../../Image/p8.jpg";


export default function Gallery() {
  return (
    <>
    <Header/>
    <div className='header__section'>
      <div className="image_overlay"></div>
      <h1 className='header__heading'>Photo <br /> Gallery</h1>
    </div>
    <div className="images__section">
    <div className='flex-container'>
        <div >
            <img src={image1} alt="" />
        {/* </div>
        <br/>
        <div > */}
            <img src={image2} alt="" />
        {/* </div>
        <br/>
        <div > */}
            <img src={image3} alt="" />
        {/* </div>
        <br/>
        <div > */}
            <img src={image4} alt="" />
        {/* </div>
        <br/>
        <div > */}
            <img src={image5} alt="" />
        {/* </div>
        <div > */}
            <img src={image6} alt="" />
        {/* </div>
        <div > */}
            <img src={image7} alt="" />
        {/* </div>
        <div > */}
            <img src={image8} alt="" />
        </div>
        {/* <div >
            <img src={image3} alt="" />
        </div>
        <div >
            <img src="../Image/p1.jpeg" alt="" />
        </div>
        <div >
            <img src="../Image/p1.jpeg" alt="" />
        </div>
        <div >
            <img src="../Image/acc.png" alt="" />
        </div> */}
    </div>
    </div>
    <br/>
    <Footer/>
    </>
  )
}
