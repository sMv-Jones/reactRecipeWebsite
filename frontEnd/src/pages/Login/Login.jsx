import "./login.css";

function Login() {
  return (
    <div className="login-wrapper">
      <div className="login-box">
        <form className="login-form">
          <h1>Welcome <br /> Back!</h1>
          <input type="text" required placeholder="Enter username" />
          <input type="password" required placeholder="Enter password" />
          <button type="submit" id="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
