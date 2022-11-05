import React, { useEffect } from "react";

import { Carousel } from "react-bootstrap";

import "./SignUp.js";
import "../homecss.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import TodaysThought from "./TodaysThought.js";
import Events from "./Events.js";
import Vision from "./Vision.js";
import Footer from "./Footer.js";
import AmityLog from "../Image/AmityLogo_home_page.png"
import Header from "./Header.js";
import image1 from "../Image/palak-modified.png";
import image2 from "../Image/yaman-modified.png";
import image3 from "../Image/vanshita-modified.png";
import image4 from "../Image/p8.jpg";
export default function Home() {
  const navigate=useNavigate();
  useEffect(() => {
    if(!localStorage.getItem('Token')){
      navigate('/signIn')
    }
  }, [])
  
  return (
    <>
    <Header/>
      <div id="home">
        <h1 className="h-primary">Amity Coding Club</h1>
        <img className="AmityLogo_HomePage" src={AmityLog} alt="" />
        <h3 className="AmityName">Amity University Madhya Pradesh</h3>

        <div className="pcontain">
          <p>
            Don't worry if it doesn't work right.If everything did, you’d <br />{" "}
            be out of a job.
          </p>
        </div>
        <Link to="/SignUp">
          <button type="submit" className="hsign">
            Sign Up
          </button>
        </Link>
      </div>
      <div className="para">
        <p>
          We're building <br /> the future together.
        </p>
      </div>

      <div className="home__founder__developer bd-highlight mb-3 homeflex">
        <div className="flex-container d-flex flex-column bd-highlight mb-3 flex1">
          <h2>FOUNDER</h2>
          <h3></h3>
          Founded by the students of the batch 2017-2021
        </div>

        <div className="home__development__para flex-container d-flex flex-column bd-highlight mb-3 flex2">
          <h2>DEVELOPER</h2>
          <h3>
            Developed by students of batch 2020-2024
          </h3>
        </div>
      </div>

      <div className="carousel__section">
        <Carousel id="carousel">
          <Carousel.Item>
            <h2 className="carouse_heading">CORE Team Members</h2>
            <div className="firstalumina d-block w-100 ">
              <h3>Technical Head</h3>
              <h5>Btech CSE</h5>
            </div>
            <div className="firstslideimg1 ">
              <img
                className="d-block w-100 set"
                src={image1}
                alt=""
              ></img>
            </div>

            <div className="secondalumina  ">
              <h3>Designing Head</h3>
              <h5>Btech CSE</h5>
            </div>
            <div className="firstslideimg2 ">
              <img  className="set" src={image2} alt=""></img>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <h2 className="carouse_heading">CORE Team Members</h2>
            <div className="firstalumina d-block w-100 ">
              <h3>Social Media Head</h3>
              <h5>Btech CSE</h5>
            </div>
            <div className="firstslideimg1 ">
              
              <img
                className="d-block w-100 set"
                src={image3}
                alt=""
              ></img>
              
            </div>
            <div className="secondalumina  ">
              <h3>Management Head</h3>
              <h5>Btech CSE</h5>
            </div>
            <div className="firstslideimg2">
              <img src={image4} className="set" alt=""></img>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      <TodaysThought />

      <Events/>

      <Vision/>
      <Footer/>
    </>
  );
}
