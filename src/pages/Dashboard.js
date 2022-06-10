import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import jwt from "jsonwebtoken";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [tempLocation, setTempLocation] = useState("");
  const [username, setUsername] = useState("");
  const [photo, setPhoto] = useState("");
  async function populateLocation() {
    const req = await fetch("http://localhost:4000/api/status", {
      headers: {
        "x-acess-token": localStorage.getItem("token"),
      },
    });

    const data = await req.json();
    if (data.status === "ok") {
      setLocation(data.location);
      setUsername(data.username);
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
        populateLocation();
      }
    }
  }, []);

  async function updateLocation(event) {
    event.preventDefault();
    const req = await fetch("http://localhost:4000/api/status", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-acess-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        location: tempLocation,
      }),
    });

    const data = await req.json();
    if (data.status === "ok") {
      setLocation(tempLocation);
      setTempLocation("");
    } else {
      alert(data.error);
    }
  }

  return (
    <div className="Dash">
      <Nav />
      <h1>Dashboard</h1>
      <h3>
        <img src={photo} alt="profile pic"></img>
      </h3>
      <h2>
        {username || "no username"}: {location || "Location not set"}
      </h2>
      <form onSubmit={updateLocation}>
        <input
          type="text"
          placeholder="set your Location"
          value={tempLocation}
          onChange={(e) => setTempLocation(e.target.value)}
        />
        <input type="submit" value="Update Location" />
      </form>
    </div>
  );
};

export default Dashboard;
