import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import ContactUs from './screens/ContactUs'
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
          <Route exact path = '/contactinfo' element = {<ContactUs></ContactUs>} ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;