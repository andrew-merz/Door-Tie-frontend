import React, { useEffect } from "react";
import Nav from "../components/Nav";
import jwt from "jsonwebtoken";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  async function populateStatus() {
    const req = await fetch("http://localhost:4000/api/status", {
      headers: {
        "x-acess-token": localStorage.getItem("token"),
      },
    });

    const data = req.json();
    console.log(data);
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
  return (
    <div className="Dash">
      <Nav />
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
