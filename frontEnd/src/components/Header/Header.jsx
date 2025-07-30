import { NavLink } from "react-router-dom";
function Header(){
    return (
        <div>
            <NavLink to=''>Home</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/register'>Register</NavLink>
            <NavLink to='/recipe'>Recipe</NavLink>
        </div>
    )
}

export default Header;