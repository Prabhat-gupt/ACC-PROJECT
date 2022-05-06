import React from "react";
import "../style.css";
export default function SignUp() {
  return (
    <div>
        {/* <img src="./Image/acc.png" alt="image"/> */}
      <div className="signup">
      <div className="container">
            <a className="navbar-brand" href="/">
            <img id="upImage" src={require("../Image/signin.png")} alt="" height="500px" width="500px" />
            </a>
        </div>
        {/* <div id="container" > */}
        <div className="container contactbox">
          <form className="fcontainer">
        <div className="container mb-3 flexcolor">

          <img  src="./Image/acc.png" alt="" height="80px" width="90px" />
          <h2>SignUp</h2>
        <div className="d-flex flex-row bd-highlight mb-3 formc ">
          <div className="flex-container d-flex flex-column bd-highlight mb-3">
            <div class="p-2 bd-highlight input">
            <input type='text'class='input-field'placeholder='First Name' required/>
            </div>
            <div class="p-2 bd-highlight">
            <input type='email'class='input-field'placeholder='Email Id' required/>
            </div>
            <div class="p-2 bd-highlight">
            <input type='text'class='input-field'placeholder='College' required/>
            </div>
            <div class="p-2 bd-highlight">
            <input type='password'class='input-field'placeholder='Password' required/>
            </div>
          </div>

            <div className="flex-container d-flex flex-column bd-highlight mb-3">
            <div class="p-2 bd-highlight">
            <input type='text'class='input-field'placeholder='Last Name' required/>
            </div>
            <div class="p-2 bd-highlight">
            <input type='text'class='input-field'placeholder='User Type' required/>
            </div>
            <div class="p-2 bd-highlight">
            <input type='text'class='input-field'placeholder='Phone No.' required/>
            </div>
            <div class="p-2 bd-highlight">
            <input type='password'class='input-field'placeholder='Confim Password' required/>
            </div>
            </div>
          </div>
            <button type="submit" className="btn btn-primary butt">
              Sign Up
            </button>
            <p className="para">Already Have a account? <span className="click">Click Here</span> </p>
          </div>
          
          </form>
    </div>
        </div>
      </div>
    // </div>
  );
}
