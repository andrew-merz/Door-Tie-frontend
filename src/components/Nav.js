import { Link } from "react-router-dom";
import "../nav.css";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
function Nav(props) {
  return (
    <AppBar position="static">
      <nav className="nav">
        <Toolbar>
          <Link to="/">
            <div>Home</div>
          </Link>
          <Link to="/pages/Roomates">
            <div>Roomates</div>
          </Link>
          <Link to="/pages/Edit">
            <div>Edit</div>
          </Link>
          <Link to="/pages/Register">
            <div>Register</div>
          </Link>
          <Link to="/pages/Login">
            <div>Login</div>
          </Link>
        </Toolbar>
      </nav>
    </AppBar>
  );
}

export default Nav;
