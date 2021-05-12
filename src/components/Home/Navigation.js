import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./Navigation.module.css";

const Navigation = () => {
  const ctx = useContext(AuthContext);

  return (
    <>
      <nav className={classes.nav}>
        <ul>
          {ctx.isLoggedIn && (
            <li>
              <Link to="/" className="nav-links">
                LOGO
              </Link>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <Link to="/home" className="nav-links">
                Home
              </Link>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <Link to="/tasks" className="nav-links">
                Tasks
              </Link>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <Link to="/user" className="nav-links">
                User
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
