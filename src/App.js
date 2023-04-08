import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import SignOut from './screens/SignOut';
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
          <Route exact path = '/signout' element = {<SignOut></SignOut>} ></Route>
          <Route exact path = '/contactinfo' element = {<ContactUs></ContactUs>} ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;