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
import MissingTable from './screens/MissingTable';
import MissingAdding from './screens/MissingAdding'
import WantedTable from './screens/WantedTable';
import WantedAdding from './screens/WantedAdding';
import Analysis from './screens/Analysis';
import SearchComplaint from './screens/SearchComplaint'
import ComplaintDetail from './screens/ComplaintDetail';
import CrimeDetails from './screens/CrimeDetails';

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
          <Route exact path = '/missingtable' element = {<MissingTable></MissingTable>} ></Route>
          <Route exact path = '/wantedtable' element = {<WantedTable></WantedTable>} ></Route>
          <Route exact path = '/missingadd' element = {<MissingAdding></MissingAdding>} ></Route>
          <Route exact path = '/wantedadd' element = {<WantedAdding></WantedAdding>} ></Route>
          <Route exact path = '/analysis' element = {<Analysis></Analysis>} ></Route>
          <Route exact path = '/searchcomplaint' element = {<SearchComplaint></SearchComplaint>}></Route>
          <Route exact path = '/complaintdetails' element = {<ComplaintDetail></ComplaintDetail>}></Route>
          <Route exact path = '/crimedetails' element = {<CrimeDetails></CrimeDetails>}></Route>
        </Routes> 
      </div>
    </Router>
  );
}

export default App;