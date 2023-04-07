import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import SignOut from './screens/SignOut';
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
          <Route exact path = "/signup" element = {<SignUp></SignUp>} ></Route>
          <Route exact path = '/signout' element = {<SignOut></SignOut>} ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;