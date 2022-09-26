import React, { useState } from "react";
import "./Alumni.css";
// import Footer from "../Footer.js";
import { Link } from "react-router-dom";
export default function Alumni() {

  const [previewImg,setPreviewImg] = useState(null);
  const [previewImgError,setPreviewImgError] = useState('');

  const [displayImg,setDisplayImg] = useState(null);

  const imgTypes = ['image/png','image/jpeg'];
  const handleImgChange=(e)=>{
    let selectedFile = e.target.file[0];
    if(selectedFile){
      if(selectedFile && imgTypes.includes(selectedFile.type)){
        setPreviewImg(URL.createObjectURL(selectedFile));
        setPreviewImgError('')
      }else{
        setPreviewImg(null);
        setPreviewImgError('please select valid image type jpeg or png');

      }
    }else{
      console.log('select your file')
    }
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log('form submitted');
  }


  return (
    <>
      <div className="Alumni__header__section">
        <h2>Alumni</h2>
        <div className="Alumni__button">
          <div className="Alunu__img">
           {previewImg && <img src= {previewImg} alt="previewImg" />}
          </div>
          <div className="upload__button">
          <input type="file" id="file" onChange={handleImgChange} accept="image/*" style={{display:'none'}} />
            <label htmlFor="file" onSubmit={handleSubmit} className="upload__image">Upload</label> 
          </div>
        </div>
      </div>

      <div className="container">
        <form>
          <div className="form-group data__input">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              type="name"
              className="form-control"
              id="alumniName"
              aria-describedby="emailHelp"
              placeholder="Enter name"
            />
          </div>
          <div className="form-group data__input">
            <label htmlFor="exampleInputEmail1">Company</label>
            <input
              type="text"
              className="form-control"
              id="CompanyName"
              aria-describedby="emailHelp"
              placeholder="Enter company"
            />
          </div>
          <div className="form-group data__input">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="emailAddress"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          
          <div className="form-group data__input">
            <label htmlFor="exampleInputEmail1">Github Profile Link</label>
            <input
              type="link"
              className="form-control"
              id="githubprofileLink"
              aria-describedby="emailHelp"
              placeholder="Enter Github Link"
            />
          </div>

          <div className="form-group data__input">
            <label htmlFor="exampleInputEmail1">Linkedin Profile Link</label>
            <input
              type="link"
              className="form-control"
              id="LinkedInProfileLink"
              aria-describedby="emailHelp"
              placeholder="Enter Linked Profile Link"
            />
            <div className="form-group data__input">
              <label htmlFor="exampleInputEmail1">Work At</label>
              <input
                type="text"
                className="form-control"
                id="workAt"
                aria-describedby="emailHelp"
                placeholder="Enter Work Place"
              />
            </div>
            <div className="form-group data__input">
              <label htmlFor="exampleInputEmail1">Work Experience</label>
              <textarea
                type="paragram"
                className="form-control"
                id="workExperience"
                aria-describedby="emailHelp"
                placeholder="Enter Work Experience"
              />
            </div>
            <div className="form-group data__input">
              <label htmlFor="exampleInputEmail1">Internship Experience</label>
              <textarea
                type="paragram"
                className="form-control"
                id="IntershipExperience"
                aria-describedby="emailHelp"
                placeholder="Enter Work Experience"
              />
            </div>
          </div>
          <Link to="/Pages/CoreMember">
          <button type="submit" className="btn btn-primary data__input">
            Save
          </button>
          </Link>
        </form>
      </div>

      {/* <Footer/> */}
    </>
  );
}
