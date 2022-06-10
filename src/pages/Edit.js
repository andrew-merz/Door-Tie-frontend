import React, { useState } from "react";
import Nav from "../components/Nav";

function Edit() {
  const [name, setName] = useState("");

  async function createRoom(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:4000/api/room", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
      }),
    });
    const data = await response.json();
    if (data.status === "ok") {
      console.log(name);
    }
  }

  return (
    <div className="edit">
      <Nav />
      <h1>Edit Page</h1>
      <form onSubmit={createRoom}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Edit room name"
        />
        <input type="submit" value="Re-Name" />
      </form>
    </div>
  );
}

export default Edit;
