import "./login.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenicated') === 'true';
    if (isAuthenticated) {
      window.location.replace("/");
      navigate("/")
    }
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/recipes/login', {
        email,
        password
      });

      console.log("Login successful:", response.data);

      // Example: Save userId to localStorage (optional)
      localStorage.setItem('userId', response.data.userId);
      localStorage.setItem('username', response.data.username);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      localStorage.setItem('isAuthenicated', true);

      // You can redirect or set app state here
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1>Welcome <br /> Back!</h1>
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
          <button type="submit" id="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
