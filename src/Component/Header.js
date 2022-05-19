import React from 'react'
import { Link } from 'react-router-dom';
import "../style.css";
import "./SignUp";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-white bg-white ">
        <div className="container">
            <a className="navbar-brand" href="/">
            <img src="./Image/acc.png" alt="" width="80" height="80" className="d-inline-block align-text-top"/>
            </a>
        </div>
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
            <img src="./Image/home.png" alt="" width="40" height="40" className="d-inline-block align-text-top"/>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                   <Link className="nav-link active" to="/SignUp">SignUp</Link> {/*className="nav-link active" href={require("./SignUp.js")}>SignUp</> */}
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/">About Us</Link>
                </li>
              </ul>
              {/* <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form> */}
            </div>
          </div>
        </nav>
    </div>
  )
}
