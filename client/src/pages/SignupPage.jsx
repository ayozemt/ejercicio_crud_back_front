import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleSignupSubmit = async (event) => {
    event.preventDefault();

    const requestBody = { email, password, name };

    axios
      .post(`${API_URL}/auth/signup`, requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div>
      <h1>Signup</h1>

      <form onSubmit={handleSignupSubmit}>
        <label htmlFor="input-name" className="form-label">
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

        <label htmlFor="input-name" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleName}
          className="form-control"
        />

        <button type="submit" className="btn btn-primary">
          Signup
        </button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <hr />
      <p>
        Already have account? <Link to={"/login"}>Login</Link>
      </p>
    </div>
  );
}

export default SignupPage;
