import { Link } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={"Navbar " + theme}>
      <Link to="/">
        <button className="btn btn-light">Home</button>
      </Link>

      <Link to="/trips">
        <button className="btn btn-light">Trips</button>
      </Link>

      <Link to="/about">
        <button className="btn btn-light">About</button>
      </Link>

      <button className="btn btn-light" onClick={toggleTheme}>
        Theme
        {theme === "light" ? "🌞" : "🌚"}
      </button>
    </nav>
  );
}

export default Navbar;
