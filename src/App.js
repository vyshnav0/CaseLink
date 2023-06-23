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
import Signup from './screens/Signup';

  
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path = "/" element = {<Home></Home>} ></Route>
          <Route exact path = "/login" element = {<Login></Login>} ></Route>
          <Route exact path = "/signup" element = {<Signup></Signup>} ></Route>
          <Route exact path = '/contactinfo' element = {<ContactUs></ContactUs>} ></Route>
          <Route exact path = '/filecomplaint' element = {<FileComplaint></FileComplaint>} ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;