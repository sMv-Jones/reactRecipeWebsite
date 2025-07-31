import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Register() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    if (isAuthenticated) {
      window.location.replace("/");
    }
  }, []);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const res = await axios.post("/recipes/addUser", {
        username,
        email,
        password,
      });

      alert("Registration successful! Please log in.");
      navigate("/login"); // Redirect to login
    } catch (err) {
      if (err.response?.status === 409) {
        alert("User already exists.");
      } else {
        alert("Registration failed. Try again.");
        console.error(err);
      }
    }
  };
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenicated') === 'true';
    if (isAuthenticated) {
      window.location.replace("/");
    }
  }, []);

  return (
    <div className="register-wrapper">
      <div className="register-box">
        <form className="register-form" onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <input
            type="text"
            required
            placeholder="Enter username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="email"
            required
            placeholder="Enter email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            required
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <input
            type="password"
            required
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
          <button type="submit" id="register-submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
