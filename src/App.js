// import logo from './logo.svg';
import "./App.css";
import Header from "./Component/Header";
import Home from "./Component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Component/SignUp";
import SignIn from "./Component/SignIn";
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/SignUp" element={ <SignUp />}/>
          <Route path="/SignIn" element={<SignIn/>}/>
          <Route path="/" element= {<Home />}/> 
    
        </Routes>
        <br />
        {/* <p>we are checking the git pull request</p>
      <SignUp/> */}
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
