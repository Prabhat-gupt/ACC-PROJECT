
// import logo from './logo.svg';
import './App.css';
import Header from './Component/Header'
import Home from './Component/Home';
// import SignUp from './Component/SignUp';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <br/>
      {/* <p>we are checking the git pull request</p>
      <SignUp/> */}
    </div>
  );
}

export default App;


//  TO PUSH THE CODE AND MERGE WITH THE MAIN BRANCH

// # ...develop some code...

// $ git add –A
// $ git commit –m "Some commit message"
// $ git checkout master
// Switched to branch 'master'
// $ git merge new-branch
