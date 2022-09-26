import React, {useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import "./SignIn";
import "../style.css";
import { Form } from "react-bootstrap";

export default function SignUp() {

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    College: "",
    phone_no: "",
    User_Type: "",
  });
  

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {

    e.preventDefault();
     console.log(formData)
     if(formData.User_Type==="coremember"){
        formData.User_Type="core member";
        console.log(formData.User_Type);
     }
    const response = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(formData),
    });
    const res = await response.json ();
    if(res.status === 302 || !res){
      window.alert("Invalid Registration");
      console.log("Invalid Resgistration");
    }else{
      window.alert(" Registration Successfull");
      console.log("Registration Successfull");

      // let navigate = useNavigate();
      navigate("/");
    }
  };
    
  let navigate = useNavigate()
  


  // let navigate = useNavigate();


  return (
    <>
      {/* <img src="./Image/acc.png" alt="image"/> */}
      <div className="signup">
        <div className="signup__container__flex">
          <div className="container">
            {/* <a className="navbar-brand" href="/"> */}
            <img
              id="upImage"
              src={require("../Image/signin.png")}
              alt=""
              className="signup__Image"
              // height="500px"
              // width="500px"
            />
            {/* </a> */}
          </div>
          {/* <div id="container" > */}
          <div className="container contactbox">
            <form className="fcontainer" action="POST" >
              <div className=" form__mobile container mb-3 flexcolor">
                <div className="accimg__signup">
                  <div className="accimg">
                    <img
                      className="newimg"
                      src="./Image/acc.png"
                      alt=""
                      height="80px"
                      width="90px"
                    />
                  </div>
                  <div className="sign__up">
                    <h2 className="signup__signup">SignUp</h2>
                  </div>
                </div>
                <div className="d-flex flex-row bd-highlight mb-3 formc ">
                  <div className="flex-container d-flex flex-column bd-highlight mb-3">
                    <div className="p-2 bd-highlight input">
                      <input
                        name="first_name"
                        id="first_name"
                        type="text"
                        className="input-field"
                        placeholder="First Name"
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>
                    <div className="p-2 bd-highlight">
                      <input
                        type="email"
                        id="email"
                        className="input-field"
                        placeholder="Email Id"
                        name="email"
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>
                    <div className="p-2 bd-highlight">
                      <input
                        id="College"
                        name="College"
                        type="text"
                        className="input-field"
                        placeholder="College"
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>
                    <div className="p-2 bd-highlight">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        className="input-field"
                        placeholder="Password"
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>
                  </div>

                  <div className="flex-container d-flex flex-column bd-highlight mb-3">
                    <div className="p-2 bd-highlight">
                      <input
                        id="last_name"
                        name="last_name"
                        type="text"
                        className="input-field"
                        placeholder="Last Name"
                        required
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="p-2 bd-highlight">
                      {/* <input
                        id="User_Type"
                        htmlFor="userType"
                        name="User_Type"
                        type="text"
                        className="input-field"
                        placeholder="User Type"
                        onChange={(e) => onChange(e)}
                        required
                      /> */}

                      <select id="userType" htmlFor="userType"
                        name="User_Type"
                        type="text"
                        className="input-field"
                        placeholder="User Type"
                        onChange={(e) => onChange(e)}
                        required>
                        <option selectedvalue="userType">User Type</option>
                        <option value="coremember">core member</option>
                        <option value="alumni">alumni</option>  
                      </select>
                    </div>
                    <div className="p-2 bd-highlight">
                      <input
                        type="text"
                        name="phone_no"
                        id="phone_no"
                        className="input-field"
                        placeholder="Phone No."
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>
                    <div className="p-2 bd-highlight">
                      <input
                        name="confirm_password"
                        id="confirm_password"
                        type="password"
                        className="input-field"
                        placeholder="Confim Password"
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>
                  </div>
                </div>
                <button
                  // onClick={()=> {navigate('/')}}
                  type="submit"
                  onClick={handleSubmit}
                  className="btn btn-primary butt mobile__button"
                >
                  Sign Up
                </button>
                <p className="signup_para">
                  Already Have a account?
                  <Link to="/SignIn">
                    <span className="click">Click Here</span>{" "}
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

// export default SignUp;

// vikas bhaiya code

// import React, { useState } from "react";
// import { connect } from "react-redux";
// import { Link, Redirect } from "react-router-dom";
// import { register } from "../../actions/auth";
// import PropTypes from "prop-types";
// import Alert from "../layout/Alert";
// import { setAlert } from "../../actions/alert";

// const Register = ({ setAlert, register, isAuthenticated }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     password2: "",
//   });

//   const { name, email, password, password2 } = formData;

//   const onChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = async (e) => {
//     console.log("Form data", e);
//     e.preventDefault();
//     if (password !== password2) {
//       setAlert("Password do not match", "danger");
//     } else {
//       register({ name, email, password });
//     }
//   };

//   // Redirect if logged in
  // if (isAuthenticated) {
  //   return <Redirect to="/dashboard" />;
  // }

//   return (
//     <>

// <section class="contact-form-wrap section">
//     <div class="container">
//         <div class="row justify-content-center">
//             <div class="col-lg-6">
//                 <div class="section-title text-center">
//                     <h2 class="text-md mb-2">Sign Up</h2>
//                     <div class="divider mx-auto my-4"></div>
//                     <p class="mb-5">Create Your Account</p>
//                 </div>
//             </div>
//         </div>
//       <div className="row">
//         <div className="col-lg-12 col-md-12 col-sm-12">
// 		{/* <h1 className="heading">Sign Up</h1>
//         <p className="lead">
//           <i className="fas fa-user"></i> Create Your Account
//         </p> */}
//         <Alert />
//         <br />
//           <form onSubmit={(e) => onSubmit(e)}

//           >

//             <div className="row">
//               <div className="col-lg-10">
//                 <div className="form-group">
// 				  <input
//               type="text"
//               placeholder="Full Name"
//               name="name"
//               value={name}
// 			  className="form-control"
//               onChange={(e) => onChange(e)}
//             />
//                 </div>
//               </div>
//               <div className="col-lg-10">
//                 <div className="form-group">
// 				<input
//               type="email"
//               placeholder="Email Address"
//               name="email"
//               value={email}
// 			  className="form-control"
//               onChange={(e) => onChange(e)}
//             />
//                 </div>
//               </div>
//               <div className="col-lg-10">
//                 <div className="form-group">
// 				<input
//               type="password"
//               placeholder="Password"
//               name="password"
//               minLength="6"
//               value={password}
// 			  className="form-control"
//               onChange={(e) => onChange(e)}
//             />
//                 </div>
//               </div>
//               <div className="col-lg-10">
// 			  <div className="form-group">
// 			  <input
//               type="password"
//               placeholder="Confirm Password"
//               name="password2"
//               minLength="6"
//               value={password2}
// 			  className="form-control"
//               onChange={(e) => onChange(e)}
//             />
//                 </div>
//               </div>
//             </div>
// 			<input type="submit" className="btn btn-main btn-round-full" value="Register" />
//           </form>
//           <br/>
// 		  <p className="mb-5">
//           Already have an account? <Link to="/login">Sign In</Link>
//         </p>
//         </div>
//       </div>
// 	  </div>
// 	  </section>

//       {/* <div className="register-form">
//         <h1 className="heading">Sign Up</h1>
//         <p className="lead">
//           <i className="fas fa-user"></i> Create Your Account
//         </p>
//         <Alert />
//         <br />
//         <form className="form" onSubmit={(e) => onSubmit(e)}>
//           <div className="form-group">
//             <input
//               type="text"
//               placeholder="Name"
//               name="name"
//               value={name}
//               onChange={(e) => onChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="email"
//               placeholder="Email Address"
//               name="email"
//               value={email}
//               onChange={(e) => onChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               minLength="6"
//               value={password}
//               onChange={(e) => onChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               name="password2"
//               minLength="6"
//               value={password2}
//               onChange={(e) => onChange(e)}
//             />
//           </div>
//           <input type="submit" className="btn btn-primary" value="Register" />
//         </form>
//         <p className="link">
//           Already have an account? <Link to="/login">Sign In</Link>
//         </p>
//       </div> */}
//     </>
//   );
// };

// Register.propTypes = {
//   setAlert: PropTypes.func.isRequired,
//   register: PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool,
// };

// const mapStateToProps = (state) => ({
//   isAuthenticated: state.auth.isAuthenticated,
// });

// export default connect(mapStateToProps, { setAlert, register })(Register);
