// import logo from './logo.svg';
import "./App.css";
import Header from "./Component/Header";
import Home from "./Component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Component/SignUp";
import SignIn from "./Component/SignIn";
import Gallery from "./Component/Pages/Gallery";
import InfoAlumni from "./Component/Pages/InfoAlumni";
import Alumni from "./Component/Pages/Alumni";
import AlumniCard from "./Component/Pages/AlumniCard";
import CoreMember from "./Component/Pages/CoreMember";
function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/SignUp" element={ <SignUp />}/>
          <Route path="/SignIn" element={<SignIn/>}/>
          <Route path="/" element= {<Home />}/> 
          <Route path="/Pages/Gallery" element={<Gallery/>}/>
          <Route path="/Pages/InfoAlumni" element={<InfoAlumni/>}/>
          <Route path="/Pages/Alumni" element={<Alumni/>}/>
          <Route path="/Pages/AlumniCard" element={<AlumniCard/>}/>
          <Route path="/Pages/CoreMember" element={<CoreMember/>}></Route>
        </Routes>
        <br />
    
      </div>
    </Router>
  );
}

export default App;

//  TO PUSH THE CODE AND MERGE WITH THE MAIN BRANCH

// # ...develop some code...

// $ git add –A
// $ git commit –m "Some commit message"
// $ git checkout master
// Routesed to branch 'master'
// $ git merge new-branch
