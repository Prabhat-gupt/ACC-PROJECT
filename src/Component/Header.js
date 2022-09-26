import React from "react";
import { Link } from "react-router-dom";
import "../style.css";
import "./SignUp";
import Avatar from "react-avatar";
import "./Pages/Gallery";
import { Dropdown } from "react-bootstrap";
// import InfoAlumni from "./Pages/InfoAlumni.js";
export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="./Image/acc.png"
              alt=""
              width="80"
              height="80"
              className="d-inline-block align-text-top imagelogo"
            />
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="navbar__items collapse navbar-collapse"
            id="navbarCollapse"
          >
            <ul className=" navbar-nav ms-auto mb-2 mb-lg-0" id="myLinks">
              <img
                src="./Image/home.png"
                alt=""
                width="40"
                className="navbar__homeIcon"
                style={{
                  alignItems: "center",
                  position: "relative",
                  top: "-0.6rem",
                  left: "4%",
                }}
              />
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Pages/Gallery">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Pages/InfoAlumni">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Dropdown style={{padding:"0px 0px"}}>
                  <Dropdown.Toggle
                    variant="light"
                    id="dropdown-basic-1"
                    style={{
                      backgroundColor: "rgb(194 187 194 / 4%)",
                      border: "none",
                    }}
                    className="dropdownavatar"
                    
                  >
                    {localStorage.getItem("Token") ? (
                      <Avatar name="Prabhat Gupta" size="40" className="logout">
                        LogOut
                      </Avatar>
                    ) : (
                      <Link className="nav-link active" to="/SignUp">
                        SignUp
                      </Link>
                    )}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item  href="/Pages/Alumni">Profile</Dropdown.Item>
                    {
                     localStorage.getItem("Token")?(<Dropdown.Item
                      onClick={() => {
                        localStorage.clear();
                        window.location.reload();
                      }}
                    >
                      
                      Logout
                    </Dropdown.Item>):""
                      }
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>
            {/* <Avatar name="Foo Bar" /> */}
          </div>
        </div>
      </nav>
    </>
  );
}
