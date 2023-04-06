import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SignUp from './screens/SignUp';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path = "/" element = {<Home></Home>} ></Route>
          <Route exact path = "/login" element = {<Login></Login>} ></Route>
          <Route exact path = "/signup" element = {<SignUp></SignUp>} ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;