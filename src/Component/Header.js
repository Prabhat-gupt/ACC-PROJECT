import React, { Component } from "react";
// import logo from './Image/acc.png'

export default class navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div class="container">
            <a class="navbar-brand" href="#">
            <img src="./Image/acc.png" alt="" width="50" height="50" class="d-inline-block align-text-top"/>
            </a>
        </div>
          <div className="container-fluid">
            {/* <a className="navbar-brand" href="#">
              Navbar
            </a> */}
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
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active">SignUp</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active">About Us</a>
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
    );
  }
}
