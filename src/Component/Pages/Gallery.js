import React from 'react'
import "./gallery.css";
import Footer from "../Footer.js";
import Header from '../Header';
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
            <img src="../Image/acc.png" alt="" />
        </div>
        <div >
            <img src="../Image/acc.png" alt="" />
        </div>
        <div >
            <img src="../Image/acc.png" alt="" />
        </div>
        <div >
            <img src="../Image/acc.png" alt="" />
        </div>
        <div >
            <img src="../Image/acc.png" alt="" />
        </div>
        <div >
            <img src="../Image/acc.png" alt="" />
        </div>
        <div >
            <img src="../Image/acc.png" alt="" />
        </div>
        <div >
            <img src="../Image/acc.png" alt="" />
        </div>
        <div >
            <img src="../Image/acc.png" alt="" />
        </div>
        <div >
            <img src="../Image/acc.png" alt="" />
        </div>
        <div >
            <img src="../Image/acc.png" alt="" />
        </div>
        <div >
            <img src="../Image/acc.png" alt="" />
        </div>
    </div>
    </div>
    <Footer/>

    </>
  )
}
