import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/pages/Roomates">
        <div>Roomates</div>
      </Link>
      <Link to="/pages/Edit">
        <div>Edit</div>
      </Link>
    </nav>
  );
}

export default Nav;
