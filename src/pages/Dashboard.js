import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import jwt from "jsonwebtoken";
import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [status, setStatus] = useState("");
//   const [tempStatus, setTempStatus] = useState("");

//   async function populateStatus() {
//     const req = await fetch("http://localhost:4000/api/status", {
//       headers: {
//         "x-acess-token": localStorage.getItem("token"),
//       },
//     });

//     const data = await req.json();
//     if (data.status === "ok") {
//       setStatus(data.status);
//     } else {
//       alert(data.error);
//     }
//   }
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       const user = jwt.decode(token);
//       if (!user) {
//         localStorage.removeItem("token");
//         navigate("/login", { replace: true });
//       } else {
//         populateStatus();
//       }
//     }
//   }, []);

//   async function updateStatus(event) {
//     event.preventDefault();
//     const req = await fetch("http://localhost:4000/api/status", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "x-acess-token": localStorage.getItem("token"),
//       },
//       body: JSON.stringify({
//         status: tempStatus,
//       }),
//     });

//     const data = await req.json();
//     if (data.status === "ok") {
//       setStatus(tempStatus);
//       setTempStatus("");
//     } else {
//       alert(data.error);
//     }
//   }

//   return (
//     <div className="Dash">
//       <Nav />
//       <h1>Dashboard</h1>
//       <h2> Status: {status || "Status not set"}</h2>
//       <form onSubmit={updateStatus}>
//         <input
//           type="text"
//           placeholder="set your status"
//           value={tempStatus}
//           onChange={(e) => setTempStatus(e.target.value)}
//         />
//         <input type="submit" value="Update Status" />
//       </form>
//     </div>
//   );
// };

// export default Dashboard;

const Dashboard = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [tempLocation, setTempLocation] = useState("");

  async function populateLocation() {
    const req = await fetch("http://localhost:4000/api/status", {
      headers: {
        "x-acess-token": localStorage.getItem("token"),
      },
    });

    const data = await req.json();
    if (data.status === "ok") {
      setLocation(data.location);
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
      <h2> Location: {location || "Location not set"}</h2>
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
