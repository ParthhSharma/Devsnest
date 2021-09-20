import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Context from "../context/AuthContext";
import Home from "./Home";

function Dashboard(props) {
  const logger = useContext(Context);
  return (
    <div>
      <h1>Dashboard</h1>
      <Route>
        {logger.loggedIn ? "Welcome to Dashboard" : <Redirect to="/" />}
      </Route>
    </div>
  );
}

export default Dashboard;