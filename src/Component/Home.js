import React from 'react'
// import "../style.css";
import "../homecss.css";
export default function Home() {
  return (
    <div>
    <div id="home">
        <h1 className="h-primary">Amity Coding Club</h1>
        <div className="pcontain">
        <p>Don’t worry if it doesn’t work right.If everything did, you’d <br/> be out of a job.</p>
        </div>
        <button type="submit" className="hsign">
            Sign Up
        </button>
    </div>
     <div className="para">
       <p>We're building <br/> the future together.</p>
      </div>
      <div className="d-flex flex-row bd-highlight mb-3 homeflex">
      <div className="flex-container d-flex flex-column bd-highlight mb-3 flex1">
        <h2>FOUNDER</h2>
        <p>Sample text. Click to select the text box. <br/> Click again or double click to start <br/> editing the text.</p>
      </div>

      <div className="flex-container d-flex flex-column bd-highlight mb-3 flex2">
        <h2>DEVELOPMENT</h2>
        <p>Sample text. Click to select the text box. <br/> Click again or double click to start <br/> editing the text.</p>
      </div>
      </div>
    </div>
  )
}
