import React from "react";
import ReactDOM from "react-dom";
import Home from './Home'
import About from './About'
import Navbar from './Navbar'
import Login from './Login'
//step 1 import react-router funtions
import { BrowserRouter as Router, Route} from "react-router-dom";










//step 2. Changed to have router coordinate what is displayed
ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>,

  document.getElementById("root")
);
