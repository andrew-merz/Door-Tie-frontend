import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import jwt from "jsonwebtoken";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState("");
  const [tempStatus, setTempStatus] = useState("");

  async function populateStatus() {
    const req = await fetch("http://localhost:4000/api/status", {
      headers: {
        "x-acess-token": localStorage.getItem("token"),
      },
    });

    const data = await req.json();
    if (data.status === "ok") {
      setStatus(data.status);
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
        populateStatus();
      }
    }
  }, []);

  async function updateStatus(event) {
    event.preventDefault();
    const req = await fetch("http://localhost:4000/api/status", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-acess-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        status: tempStatus,
      }),
    });

    const data = await req.json();
    if (data.status === "ok") {
      setStatus(tempStatus);
      setTempStatus("");
    } else {
      alert(data.error);
    }
  }

  return (
    <div className="Dash">
      <Nav />
      <h1>Dashboard</h1>
      <h2> Status: {status || "Status not set"}</h2>
      <form onSubmit={updateStatus}>
        <input
          type="text"
          placeholder="set your status"
          value={tempStatus}
          onChange={(e) => setTempStatus(e.target.value)}
        />
        <input type="submit" value="Update Status" />
      </form>
    </div>
  );
};

export default Dashboard;
