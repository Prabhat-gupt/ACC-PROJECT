import React from "react";

import { Carousel } from "react-bootstrap";

import "./SignUp.js";
import "../homecss.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <div id="home">
        <h1 className="h-primary">Amity Coding Club</h1>
        <div className="pcontain">
          <p>
            Don’t worry if it doesn’t work right.If everything did, you’d <br />{" "}
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

      <div className="d-flex flex-row bd-highlight mb-3 homeflex">
        <div className="flex-container d-flex flex-column bd-highlight mb-3 flex1">
          <h2>FOUNDER</h2>
          <p>
            Sample text. Click to select the text box. <br /> Click again or
            double click to start <br /> editing the text.
          </p>
        </div>

        <div className="flex-container d-flex flex-column bd-highlight mb-3 flex2">
          <h2>DEVELOPMENT</h2>
          <p>
            Sample text. Click to select the text box. <br /> Click again or
            double click to start <br /> editing the text.
          </p>
        </div>
      </div>

      <Carousel id="carousel">
        <Carousel.Item>
          <h2 className="carouse_heading">CORE Team Members</h2>
          <div className="firstalumina d-block w-100 ">
            <h3>Technical Head</h3>
            <h5>Btech CSE</h5>
          </div>
          <div className="firstslideimg1 ">
            <img
              className="d-block w-100"
              src={require("../Image/acc.png")}
              alt=""
            ></img>
          </div>

          <div className="secondalumina  ">
              <h3>Management Head</h3>
              <h5>Btech CSE</h5>
            </div>
            <div className="firstslideimg2">
              <img  src={require("../Image/hb.png")} alt=""></img>
            </div>
         
        </Carousel.Item>
        <Carousel.Item>
        <h2 className="carouse_heading">CORE Team Members</h2>
          <div className="firstalumina d-block w-100 ">
            <h3>Technical Head</h3>
            <h5>Btech CSE</h5>
          </div>
          <div className="firstslideimg1 ">
            <img
              className="d-block w-100"
              src={require("../Image/acc.png")}
              alt=""
            ></img>
          </div>
          <div className="secondalumina  ">
              <h3>Management Head</h3>
              <h5>Btech CSE</h5>
            </div>
            <div className="firstslideimg2">
              <img  src={require("../Image/hb.png")} alt=""></img>
            </div>
         
        </Carousel.Item>
        <Carousel.Item>
        <h2 className="carouse_heading">CORE Team Members</h2>
          <div className="firstalumina d-block w-100 ">
            <h3>Technical Head</h3>
            <h5>Btech CSE</h5>
          </div>
          <div className="firstslideimg1 ">
            <img
              className="d-block w-100"
              src={require("../Image/acc.png")}
              alt=""
            ></img>
          </div>
          <div className="secondalumina  ">
              <h3>Management Head</h3>
              <h5>Btech CSE</h5>
            </div>
            <div className="firstslideimg2">
              <img  src={require("../Image/hb.png")} alt=""></img>
            </div>

          
        </Carousel.Item>
      </Carousel>

      {/* first slide code */}
      {/* <div className="slider"> */}

      {/* <div className="slider1">

          <div className="firstslide ">
            <h2>CORE Team Members</h2>
            <div className="firstalumina">
              <h3>Technical Head</h3>
              <h5>Btech CSE</h5>
            </div>
            <div className="firstslideimg1 ">
              <img src={require("../Image/acc.png")} alt=""></img>
            </div>
            <div className="secondalumina">
              <h3>Management Head</h3>
              <h5>Btech CSE</h5>
            </div>
            <div className="firstslideimg2  ">
              <img src={require("../Image/hb.png")} alt=""></img>
            </div>
          </div>
        </div> */}

      {/* code for second slider */}
      {/* <div className="slider2">
          <div className="secondslide">
            <h2>CORE Team Members</h2>
            <div className="firstalumina">
              <h3>Technical Head</h3>
              <h5>Btech CSE</h5>
            </div>
            <div className="firstslideimg1">
              <img src={require("../Image/acc.png")} alt=""></img>
            </div>
            <div className="secondalumina">
              <h3>Management Head</h3>
              <h5>Btech CSE</h5>
            </div>
            <div className="firstslideimg2">
              <img src={require("../Image/hb.png")} alt=""></img>
            </div>
          </div>
        </div> */}
      {/* <div className="slide left">
          <span className="fa fa-angle-left"></span>
        </div>
        <div className="slide right">
          <span className="fa fa-angle-right"></span>
        </div> */}
      {/* </div> */}
      {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button> */}
      {/* </div> */}
    </div>
  );
}

// slider

/* <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active slide-h2">
              <h2 className=" d-block w-100">CORE Team Members</h2>
              <div className="firstslide">
                <h3>Technical Head</h3>
              </div>
              <img src={require("../Image/acc.png")} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <h2 className="slide-h2 d-block w-100">CORE Team Members</h2>
              <img src={require("../Image/hb.png")} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <h2 className="slide-h2 d-block w-100">CORE Team Members</h2>
              <img src={require("../Image/b1.png")} className="d-block w-100" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div> 
      
</div>*/
