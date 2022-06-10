import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import jwt from "jsonwebtoken";
import { useNavigate } from "react-router-dom";

function Roommates() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();

  async function populatePage() {
    const req = await fetch("http://localhost:4000/api/status", {
      headers: {
        "x-acess-token": localStorage.getItem("token"),
      },
    });

    const data = await req.json();
    if (data.status === "ok") {
      setUsername(data.username);
      setEmail(data.email);
      setPhoto(data.photo);
    } else {
      alert(data.error);
    }
  }
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt.decode(token);
      if (!user) {
        localStorage.removeItem("token");
        navigate("/login", { replace: true });
      } else {
        populatePage();
      }
    }
  }, []);
  return (
    <div className="roommates">
      <Nav />
      <h1>Roommates Page</h1>
      <div>
        <h2>
          <img src={photo} alt="profile pic"></img>
        </h2>
        <h2>Name: {username}</h2>
        <h2>Email: {email}</h2>
      </div>
    </div>
  );
}

export default Roommates;
