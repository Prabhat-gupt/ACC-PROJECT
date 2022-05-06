import React from 'react'
import "../style.css";
export default function Home() {
  return (
    <div id="home">
        <h1 className="h-primary">Amity Coding Club</h1>
        <div className="pcontain">
        <p>Don’t worry if it doesn’t work right.If everything did, you’d <br/> be out of a job.</p>
        </div>
        <button type="submit" className="hsign">
            Sign Up
        </button>
    </div>
  )
}
