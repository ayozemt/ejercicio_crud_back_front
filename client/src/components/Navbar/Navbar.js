import { Link } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";
import { AuthContext } from "../../context/auth.context";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className={"Navbar " + theme}>
      <Link to="/">
        <button className="btn btn-light">Home</button>
      </Link>

      {isLoggedIn && (
        <>
          <Link to="/trips">
            <button className="btn btn-light">Trips</button>
          </Link>
          <span style={{ color: "red" }}>Welcome, {user && user.name}!</span>
          <button className="btn btn-light" style={{ color: "red" }} onClick={logOutUser}>Logout</button>
        </>
      )}

      <Link to="/about">
        <button className="btn btn-light">About</button>
      </Link>

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            <button className="btn btn-light">Sign Up</button>
          </Link>
          <Link to="/login">
            <button className="btn btn-light">Login</button>
          </Link>
        </>
      )}

      <button className="btn btn-light" onClick={toggleTheme}>
        Theme
        {theme === "light" ? "🌞" : "🌚"}
      </button>
    </nav>
  );
}

export default Navbar;
