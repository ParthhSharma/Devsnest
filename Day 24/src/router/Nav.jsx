import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
      <div>
        <div className="nav">
          <ul>
            <li>
              <Link
                to="/"
                style={{ textDecoration: "none", color: "whitesmoke" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "whitesmoke" }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                style={{ textDecoration: "none", color: "whitesmoke" }}
              >
                Profile
              </Link>
            </li>{" "}
            <li>
              <Link
                to="/dashboard"
                style={{ textDecoration: "none", color: "whitesmoke" }}
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Nav