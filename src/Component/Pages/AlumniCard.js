import React from "react";
import "./AlumniCard.css";
// import galleryHeader from '../Image/GalleryHeader';
import appleimg from "D:\\React JS\\acc-project\\src\\Image\\applelogo.png";
export default function AlumniCard() {
  return (
    <>
      <div className="container1">
        <div className="alumniCard">
          <div className="alumni_overlay"></div>
        <div className="appleImg">
          <img src={appleimg} alt="AppleImage" />
        </div>
        <div className="infoAlumni">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </div>

        <div className="alumniprofile">
          <img src="../Image/acc.png" alt="" />
        </div>
        <div className="alumniName">Ashish Pandey</div>
        </div>
      </div>

      <br />

      <div className="container1">
        <div className="alumniCard">
          <div className="alumni_overlay"></div>
        <div className="appleImg">
          <img src={appleimg} alt="AppleImage" />
        </div>
        <div className="infoAlumni">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </div>

        <div className="alumniprofile">
          <img src="../Image/acc.png" alt="" />
        </div>
        <div className="alumniName">Ashish Pandey</div>
        </div>
      </div>
    </>
  );
}
