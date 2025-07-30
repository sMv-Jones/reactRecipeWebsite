import "./Home.css"
import { NavLink } from "react-router-dom";
function Home() {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to Afzal's Recipe Website</h1>
            <p className="home-description">
                Discover a world of delicious recipes, cooking tips, and kitchen inspiration. Whether you're a beginner or a seasoned chef, there's something here for everyone.
            </p>
            <p className="signup-message">New here? Register now and start saving your favorite recipes!</p>
            <NavLink to="/login" className="auth-link">Login</NavLink>
            <p className="signup-message">Already have an account? Log in to view and manage your personal recipe collection.</p>
            <NavLink to="/register" className="auth-link">Register</NavLink>
        </div>
    )
}

export default Home;