import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import jwt from "jsonwebtoken";
//import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../dashboard.css";
//import { Paper } from "@mui/material";
const Dashboard = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [tempLocation, setTempLocation] = useState("");
  const [username, setUsername] = useState("");
  //const [photo, setPhoto] = useState("");
  const [roomName, setRoomName] = useState("");
  const [tempRoomName, setTempRoomName] = useState("");
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
    } else {
      alert(data.error);
    }
  }

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
  async function populateRoom() {
    const req = await fetch("http://localhost:4000/api/status", {
      headers: {
        "x-acess-token": localStorage.getItem("token"),
      },
    });

    const data = await req.json();
    if (data.status === "ok") {
      setRoomName(tempRoomName);
    } else {
      alert(data.error);
    }
  }

  async function createRoom(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:4000/api/status", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-acess-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        roomName: tempRoomName,
      }),
    });
    const data = await response.json();
    if (data.status === "ok") {
      setRoomName(tempRoomName);
      setTempRoomName("");
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
        populateRoom();
      }
    }
  }, []);
  return (
    <div className="Dash">
      <Nav />
      <h1>{roomName || "Dashboard"}</h1>

      <div className="dashboard">
        <div className="status-bar">
          <h2>
            {username || "User"}: {location || "Location not set"}
          </h2>
        </div>
        <div className="status-bar">
          <h2>Jane: I'll be home soon</h2>
        </div>
        <div className="status-bar">
          <h2>Kellum: Please Knock before coming in</h2>
        </div>
      </div>
      <form onSubmit={updateLocation}>
        <input
          type="text"
          placeholder="set your Location"
          value={tempLocation}
          onChange={(e) => setTempLocation(e.target.value)}
        />
        <input type="submit" value="Update Location" />
      </form>
      <form onSubmit={createRoom}>
        <input
          value={tempRoomName}
          onChange={(e) => setTempRoomName(e.target.value)}
          type="text"
          placeholder="Edit room name"
        />
        <input type="submit" value="Re-Name" />
      </form>
    </div>
  );
};

export default Dashboard;
