import React from "react";
import "../Pages/InfoAlumni.css";
export default function InfoAlumni() {
  return (
    <>
      <div className="InfoAlumni__section">
        <div className="img__name">
          <div className="img__infoAlumni">
            <img src="./Image/acc.png" alt="" />
          </div>
          <div className="heading__name">
            <h2>Abhinav Gupta</h2>
            <h5>Commvoult</h5>
          </div>
        </div>
      </div>
      <div className="work__experience">
        <h2>Work Experience</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with{" "}
        </p>
      </div>
      <div className="work__experience">
        <h2>Internship Experience</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with{" "}
        </p>
      </div>
      <div className="work__experience">
        <h2>Contact</h2>
        <div className="contactlist">
            <h5>LinkedIn</h5>
            <h5>GitHub</h5>
        </div>
      </div>
    </>
  );
}
