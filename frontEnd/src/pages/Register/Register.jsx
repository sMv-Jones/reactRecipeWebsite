import "./register.css";

function Register() {
  return (
    <div className="register-wrapper">
      <div className="register-box">
        <form className="register-form">
          <h1>Sign Up</h1>
          <input type="text" required placeholder="Enter username" />
          <input type="email" required placeholder="Enter email" />
          <input type="password" required placeholder="Enter password" />
          <input type="password" required placeholder="Confirm password" />
          <button type="submit" id="register-submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
