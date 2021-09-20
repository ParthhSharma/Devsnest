import React, { useContext } from "react";
import Context from "../context/AuthContext";
import { Route, Redirect } from "react-router-dom";
function Profile() {
  const logger = useContext(Context);
  return (
    <div>
      <Route>
        <h1>Profile</h1>
        <div>
          {logger.loggedIn ? "Welcome to your Profile" : <Redirect to="/" />}
        </div>
      </Route>
    </div>
  );
}

export default Profile;