import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005";

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const requestBody = { email, password };

    axios
      .post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);

        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="input-email" className="form-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
          className="form-control"
        />

        <label htmlFor="input-password" className="form-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
          className="form-control"
        />

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <hr />
      <p>
        Don't have an account yet? <Link to={"/signup"}>Sign up</Link>
      </p>
    </div>
  );
}

export default LoginPage;
