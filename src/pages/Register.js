import { useState } from "react";
import Nav from "../components/Nav";

function Register() {
  const [username, setUsename] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Nav />
      <h1>Register</h1>
      <form>
        <input
          value={username}
          onChange={(e) => setUsename(e.target.value)}
          type="text"
          placeholder="username"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default Register;
