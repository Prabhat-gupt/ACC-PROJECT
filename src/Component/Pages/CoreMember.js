import React from "react";
import "./coreMember.css";
export default function CoreMember() {
  return (
    <>
      <div className="Alumni__header__section coreMember__section">
        <h2>Core member</h2>
        <div className="Alumni__button">
          <div className="Alunu__img">
            <img src="src\Image\acc.png" alt="" />
          </div>
          <div className="upload__button">
            {/* <button>Upload */}
            <input type="file" id="file" accept="image/*" style={{display:'none'}} />
            <label htmlFor="file" className="upload__image">Upload</label> 
            {/* </button> */}
          </div>
        </div>
      </div>
      <div className="container">
        <form>
          <div className="form-group">
            <label className="label__section" htmlFor="exampleInputEmail1">Designation</label>
            <input
              type="text"
              className="form-control"
              id="designation"
              aria-describedby="emailHelp"
              placeholder="Designation"
            />
          </div>
          <div className="form-group">
            <label className="label__section" htmlFor="exampleInputPassword1">Github Profile Link</label>
            <input
              type="text"
              className="form-control"
              id="githubLink"
              placeholder="GitHub Link"
            />
          </div>
          <div className="form-group">
            <label className="label__section" htmlFor="exampleInputPassword1">Linkedin Profile Link</label>
            <input
              type="text"
              className="form-control"
              id="LinkedInLink"
              placeholder="LInkedIn Link"
            />
          </div>
          <div className="form-group">
            <label className="label__section" htmlFor="exampleInputPassword1">Branch</label>
            <input
              type="text"
              className="form-control"
              id="Branch"
              placeholder="Branch"
            />
          </div>
          
          <button className="btn btn-primary coreMember__button" style={{marginTop: "4%",borderRadius:"22%"}} type="submit">
            Save
          </button>
          
        </form>
      </div>
    </>
  );
}
