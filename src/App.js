import './App.css';
import'./style/Header.css'
import Home from './screens/Home';
import Login from './screens/Login';
import ContactUs from './screens/ContactUs'
import FileComplaint from './screens/FileComplaint'
import ComplaintStatus from './screens/ComplaintStatus';
import Profile from './screens/Profile';
import SignupC from './screens/SignupC';
import OfficerWork from './screens/OfficerWork';
import ManageMissing from './screens/ManageMissing';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

  
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path = "/" element = {<Home></Home>} ></Route>
          <Route exact path = "/login" element = {<Login></Login>} ></Route>
          <Route exact path = "/signupcitizen" element = {<SignupC></SignupC>} ></Route>
          <Route exact path = "/officer" element = {<OfficerWork></OfficerWork>} ></Route>
          <Route exact path = '/contactinfo' element = {<ContactUs></ContactUs>} ></Route>
          <Route exact path = '/filecomplaint' element = {<FileComplaint></FileComplaint>} ></Route>
          <Route exact path = '/complaintstatus' element = {<ComplaintStatus></ComplaintStatus>} ></Route>
          <Route exact path = '/profile' element = {<Profile></Profile>} ></Route>
          <Route exact path = '/missingdb' element = {<ManageMissing></ManageMissing>} ></Route>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;