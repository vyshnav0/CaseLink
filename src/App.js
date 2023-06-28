import './App.css';
import'./style/Header.css'
import Home from './screens/Home';
import Login from './screens/Login';
import ContactUs from './screens/ContactUs'
import FileComplaint from './screens/FileComplaint'
import ComplaintStatus from './screens/ComplaintStatus';
import Profile from './screens/Profile';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SignupC from './screens/SignupC';
import SignupO from './screens/SignupO';
import OfficerWork from './screens/OfficerWork';

  
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path = "/" element = {<Home></Home>} ></Route>
          <Route exact path = "/login" element = {<Login></Login>} ></Route>
          <Route exact path = "/signupcitizen" element = {<SignupC></SignupC>} ></Route>
          <Route exact path = "/signupofficer" element = {<SignupO></SignupO>} ></Route>
          <Route exact path = "/officer" element = {<OfficerWork></OfficerWork>} ></Route>
          <Route exact path = '/contactinfo' element = {<ContactUs></ContactUs>} ></Route>
          <Route exact path = '/filecomplaint' element = {<FileComplaint></FileComplaint>} ></Route>
          <Route exact path = '/complaintstatus' element = {<ComplaintStatus></ComplaintStatus>} ></Route>
          <Route exact path = '/profile' element = {<Profile></Profile>} ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;