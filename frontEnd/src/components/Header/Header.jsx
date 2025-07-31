import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./header.css";

function Header() {
  const navigate = useNavigate();
  const handleLogOut = ()=>{
    localStorage.clear();
    navigate("/login")
  }
  const isAuthenicated = localStorage.getItem("isAuthenicated")
  return (
    <div className="header">
      <NavLink to='/' className="nav-link">Home</NavLink>
      {!isAuthenicated && <><NavLink to='/login' className="nav-link">Login</NavLink>
        <NavLink to='/register' className="nav-link">Register</NavLink>
      </>}
      <NavLink to='/recipe' className="nav-link">Recipe</NavLink>
      {isAuthenicated && <button className="logout-button" onClick={handleLogOut}>Logout</button>}
    </div>
  );
}

export default Header;
