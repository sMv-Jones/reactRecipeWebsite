import { NavLink } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <NavLink to='/' className="nav-link">Home</NavLink>
      <NavLink to='/login' className="nav-link">Login</NavLink>
      <NavLink to='/register' className="nav-link">Register</NavLink>
      <NavLink to='/recipe' className="nav-link">Recipe</NavLink>
    </div>
  );
}

export default Header;
