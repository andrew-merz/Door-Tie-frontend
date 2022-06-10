//import "../nav.css";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";

function Nav(props) {
  // function logout() {
  //   setUser(null);
  //   localStorage.clear();
  // }

  return (
    <AppBar position="static">
      <nav className="nav">
        <Toolbar>
          <ButtonGroup variant="contained" color="secondary">
            <Button href="/pages/Dashboard">
              <div>Dashboard</div>
            </Button>
            <Button href="/pages/Roommates">
              <div>Roommates</div>
            </Button>
            <Button href="/pages/Edit">
              <div>Edit</div>
            </Button>
            <Button href="/pages/Register">
              <div>Register</div>
            </Button>
            <Button href="/pages/Login">
              <div>Login</div>
            </Button>
            <Button href="/pages/Login">
              <div>Logout</div>
            </Button>
          </ButtonGroup>
        </Toolbar>
      </nav>
    </AppBar>
  );
}

export default Nav;
