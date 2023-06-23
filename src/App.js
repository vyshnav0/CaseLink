import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import ContactUs from './screens/ContactUs'
import FileComplaint from './screens/FileComplaint'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SignupC from './screens/SignupC';
import SignupO from './screens/SignupO';

  
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path = "/" element = {<Home></Home>} ></Route>
          <Route exact path = "/login" element = {<Login></Login>} ></Route>
          <Route exact path = "/signupcitizen" element = {<SignupC></SignupC>} ></Route>
          <Route exact path = "/signupofficer" element = {<SignupO></SignupO>} ></Route>
          <Route exact path = '/contactinfo' element = {<ContactUs></ContactUs>} ></Route>
          <Route exact path = '/filecomplaint' element = {<FileComplaint></FileComplaint>} ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;