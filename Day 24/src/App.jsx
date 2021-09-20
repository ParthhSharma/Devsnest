import React from 'react'
import "./App.css";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from "./router/Home";
import About from "./router/About";
import Dashboard from "./router/Dashboard";
import Profile from "./router/Profile";
import { AuthContext } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <AuthContext>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/profile" component={Profile} />
          </AuthContext>
        </Switch>
      </Router>
    </div>
  );
}

export default App;