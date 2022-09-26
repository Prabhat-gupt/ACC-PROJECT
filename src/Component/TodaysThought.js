import React from 'react'
// import Alumni from './Pages/Alumni'
import './todaythought.css'
import { Link } from "react-router-dom";
const TodaysThought = () => {
  return (
    <div className='thoughtSection'>

     <h1 className='thought_heading'>Todays Thought</h1>

    <div className='thought__section'>
    <div className='thought__para'>
        <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
    </div>

    <div className='thought__button' >
      <Link to="/Pages/AlumniCard">
      <button>Alumina Info</button>
      </Link>
    </div>
    </div>



    </div>
  )
}

export default TodaysThought
