import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Roomates from "./pages/Roomates";
import Edit from "./pages/Edit";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/pages/Roomates" element={<Roomates />}></Route>
      <Route path="/pages/Edit" element={<Edit />}></Route>
      <Route path="/pages/Register" element={<Register />}></Route>
      <Route path="/pages/Login" element={<Login />}></Route>
      <Route path="/pages/Dashboard" element={<Dashboard />}></Route>
    </Routes>
  </Router>
);
