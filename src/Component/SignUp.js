import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase-config"
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./SignIn";
import "../style.css";
export default function SignUp() {

  const [Signup, setSignup]=useState({
    firstname: "",
    lastname: "",
    email: "",
    usertype: "",
    College: "",
    phoneno: "",
    password: "",
    confirmpassword: ""
  })
  const register = async()=>{
    try{
      if(Signup.password===Signup.confirmpassword){
        const user = await createUserWithEmailAndPassword(auth,Signup.email,Signup.password,Signup.firstname)
        console.log(user)
      }
      else{
        alert('Password Not match!!')
      }
    }catch(error){
      console.log(error.message)
    }
  }

  const handleInput=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);
    setSignup({ ...Signup, [name]: value});
  }
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
                      name="firstname"
                      placeholder="First Name"
                      onChange={handleInput}
                      value={Signup.firstname}
                      required
                    />
                  </div>
                  <div className="p-2 bd-highlight">
                    <input
                      type="email"
                      className="input-field"
                      name="email"
                      placeholder="Email Id"
                      onChange={handleInput}
                      value={Signup.email}
                      required
                    />
                  </div>
                  <div className="p-2 bd-highlight">
                    <input
                      type="text"
                      className="input-field"
                      name="College"
                      placeholder="College"
                      onChange={handleInput}
                      value={Signup.College}
                      required
                    />
                  </div>
                  <div className="p-2 bd-highlight">
                    <input
                      type="password"
                      className="input-field"
                      name="password"
                      placeholder="Password"
                      onChange={handleInput}
                      value={Signup.password}
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
                      name="lastname"
                      onChange={handleInput}
                      value={Signup.lastname}
                      required
                    />
                  </div>
                  <div className="p-2 bd-highlight">
                    <input
                      type="text"
                      className="input-field"
                      name="usertype"
                      placeholder="User Type"
                      onChange={handleInput}
                      value={Signup.usertype}
                      required
                    />
                  </div>
                  <div className="p-2 bd-highlight">
                    <input
                      type="text"
                      className="input-field"
                      name="phoneno"
                      placeholder="Phone No."
                      onChange={handleInput}
                      value={Signup.phoneno}
                      required
                    />
                  </div>
                  <div className="p-2 bd-highlight">
                    <input
                      type="password"
                      className="input-field"
                      name="confirmpassword"
                      placeholder="Confirm Password"
                      onChange={handleInput}
                      value={Signup.confirmpassword}
                      required
                    />
                  </div>
                </div>
              </div>
              <button type="submit" onClick= {register} className="btn btn-primary butt">
                Sign Up
              </button>
              <p className="signup_para">
                Already Have a account?
                <Link  to="/SignIn">
                  <span className="click">Click Here</span>{" "}
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    // </div>
  );
}
