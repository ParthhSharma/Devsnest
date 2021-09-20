"use strict"
import React, {useContext, useState} from 'react';
import Context from "../context/AuthContext";

function Home(props) {
  const logger = useContext(Context)
  const toggleLogin = () => {
    logger.toggleLogin()
  }
  return (
    <div>
      <h1>Home</h1>
      <div>Login to access Dashboard and Profile</div>
      {
        logger.loading?"Loading...":
          // <button onClick={logger.toggleLogin}>{logger.loggedIn ? "Logout" : "Login"}</button>
          logger.loggedIn?
            <button onClick={logger.logout}>Logout</button>:
            <button onClick={logger.login}>Login</button>
      }
    </div>
  );
}

export default Home;