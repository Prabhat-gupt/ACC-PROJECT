import { Link } from "react-router-dom";

import React from "react";
import "../style.css";
export default function SignUp() {
  return (
    <div>
      {/* <img src="./Image/acc.png" alt="image"/> */}
      <div className="signup">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              id="upImage"
              src={require("../Image/signin.png")}
              alt=""
              height="500px"
              width="500px"
            />
          </a>
        </div>
        {/* <div id="container" > */}
        <div className="container contactbox">
          <form className="fcontainer">
            <div className="container mb-3 flexcolor">
              <img src="./Image/acc.png" alt="" height="80px" width="90px" />
              <h2>SignUp</h2>
              <div className="d-flex flex-row bd-highlight mb-3 formc ">
                <div className="flex-container d-flex flex-column bd-highlight mb-3">
                  <div className="p-2 bd-highlight input">
                    <input
                      type="text"
                      className="input-field"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="p-2 bd-highlight">
                    <input
                      type="email"
                      className="input-field"
                      placeholder="Email Id"
                      required
                    />
                  </div>
                  <div className="p-2 bd-highlight">
                    <input
                      type="text"
                      className="input-field"
                      placeholder="College"
                      required
                    />
                  </div>
                  <div className="p-2 bd-highlight">
                    <input
                      type="password"
                      className="input-field"
                      placeholder="Password"
                      required
                    />
                  </div>
                </div>

                <div className="flex-container d-flex flex-column bd-highlight mb-3">
                  <div className="p-2 bd-highlight">
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  <div className="p-2 bd-highlight">
                    <input
                      type="text"
                      className="input-field"
                      placeholder="User Type"
                      required
                    />
                  </div>
                  <div className="p-2 bd-highlight">
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Phone No."
                      required
                    />
                  </div>
                  <div className="p-2 bd-highlight">
                    <input
                      type="password"
                      className="input-field"
                      placeholder="Confim Password"
                      required
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary butt">
                Sign Up
              </button>
              <p className="signup_para">
                Already Have a account?
                <Link to="/SignIn"><span className="click">Click Here</span>{" "}</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    // </div>
  );
}
