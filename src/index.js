import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Roomates from "./pages/Roomates";
import Edit from "./pages/Edit";
import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/pages/Roomates" element={<Roomates />}></Route>
      <Route path="/pages/Edit" element={<Edit />}></Route>
      <Route path="/pages/Register" element={<Register />}></Route>
    </Routes>
  </Router>
);
