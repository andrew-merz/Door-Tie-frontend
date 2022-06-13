import { useState } from "react";
import React from "react";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";
import { TextField, Stack } from "@mui/material";
//import Button from "@mui/material/Button";
import "../auth.css";

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:4000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });
    const data = await response.json();
    if (data.status === "ok") {
      navigate("/pages/Login");
    }
  }

  return (
    <div>
      <Nav />
      <h1>Register</h1>

      <form onSubmit={registerUser}>
        <div className="register">
          <Stack spacing={2}>
            <TextField
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
            />
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
            <TextField
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />

            <input type="submit" value="Register" />
          </Stack>
        </div>
      </form>
    </div>
  );
}

export default Register;
