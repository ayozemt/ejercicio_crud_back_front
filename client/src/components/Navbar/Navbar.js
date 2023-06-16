import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
  return (
    <nav>
      <Link to="/">
        <button className="btn btn-light">Home</button>
      </Link>

      <Link to="/trips">
        <button className="btn btn-light">Trips</button>
      </Link>

      <Link to="/about">
        <button className="btn btn-light">About</button>
      </Link>      
    </nav>
  );
}

export default Navbar;