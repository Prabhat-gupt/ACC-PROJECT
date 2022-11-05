import React from 'react'
// import Alumni from './Pages/Alumni'
import './todaythought.css'
import { Link } from "react-router-dom";
const TodaysThought = () => {
  return (
    <div className='thoughtSection'>

     <h1 className='thought_heading'>Thought</h1>

    <div className='thought__section'>
    <div className='thought__para'>
        <p>“When learning is purposeful, creativity blossoms. When creativity blossoms, thinking emanates. When thinking emanates, knowledge is fully lit. When knowledge is lit, economy flourishes.”<br></br>
― Dr. A.P.J. Abdul Kalam</p>
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
