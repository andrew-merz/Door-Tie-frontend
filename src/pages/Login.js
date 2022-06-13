import { useState } from "react";
import React from "react";
import Nav from "../components/Nav";
import { TextField } from "@mui/material";
//import Button from "@mui/material/Button";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();

    if (data.user) {
      localStorage.setItem("token", data.user);
      alert("login successful");
      window.location.href = "/pages/Dashboard";
    } else {
      alert("please check username and password");
    }

    console.log(data);
  }

  return (
    <div>
      <Nav />
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email"
        />
        <TextField
          label="Password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />

        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
