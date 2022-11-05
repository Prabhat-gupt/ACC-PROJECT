import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
// import {useHistory} from 'react-router-dom';
import "./SignUp";
import "../style.css";
import "../signin.css";
import axios from "axios";
export default function SignIn() {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [userType, setUserType] = useState("")
    // const history = useHistory();

    useEffect(()=>{
      if(localStorage.getItem('user-info')){
      }
    })

  let navigate = useNavigate()
  
  const login=(e)=>{
    e.preventDefault();
    axios({
      url:'http://localhost:5000/login',
      method:'POST',
      data:{
        email:email,
        password:password,
        User_Type:userType,
      }
    }).then((res)=>{
        localStorage.setItem('Token',res.data.token);
        navigate('/');
    }).catch((err)=>{
      console.log(err.data);
      window.alert(err.response.data.error||"Internal Server Error")
    })
  }
 
  return (
    <div>
      {/* <img src="./Image/acc.png" alt="image"/> */}
      <div className="signup">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img className="signinimg"
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
              <h2>SignIn</h2>
              <div className="d-flex flex-row bd-highlight mb-3 formc ">
                <div className="flex-container d-flex flex-column bd-highlight mb-3 forgot"> 
                  <div className="p-2 bd-highlight">
                    <input
                     onChange={(e)=>setEmail(e.target.value)}
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
                      placeholder="User Type"
                     onChange={(e)=>setUserType(e.target.value)}
                      
                      required
                    />
                  </div>
                  <div className="p-2 bd-highlight">
                    <input
                    onChange={(e)=>setPassword(e.target.value)}
                      type="password"
                      className="input-field"
                      placeholder="Password"
                      required
                    />
                  </div>
                </div>

                  <div >
                    <h1>
                        <Link to=" "><span className="forgotpassword">Forgot Password?</span></Link>
                    </h1>
                  </div>

               
              </div>
              <button type="submit" onClick={login} className="btn btn-primary butt1">
                Sign In
              </button>
              <p className="signup_para1">
                Create Account!
                <Link to="/SignUp"> <span className="click"> Click Here </span>{" "}</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    // </div>
  );
}
