import "./Home.css";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Afzal's Recipe Website</h1>
      <p className="home-description">
        Discover a world of delicious recipes, cooking tips, and kitchen inspiration. Whether you're a beginner or a seasoned chef, there's something here for everyone.
      </p>

      <div className="auth-section">
        <div className="auth-box">
          <p className="signup-message">
            🍲 New here? <br />
            <span>Register now and start saving your favorite recipes!</span>
          </p>
          <NavLink to="/register" className="auth-link">Register</NavLink>
        </div>

        <div className="auth-box">
          <p className="login-message">
            👨‍🍳 Already have an account? <br />
            <span>Log in to view and manage your personal recipe collection.</span>
          </p>
          <NavLink to="/login" className="auth-link">Login</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
