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
    </div>
  );
}

