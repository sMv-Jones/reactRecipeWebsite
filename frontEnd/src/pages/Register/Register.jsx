import "./Register.css"
function Register() {
    return (
        <div>
            <div>
                <div>
                    <img src="/images/border.png" width="30%" />
                </div>
                <form>
                    <h1>Sign Up</h1>
                    <input type="text" required placeholder="Enter username" title="" />
                    <input type="email" required placeholder="Enter email" title="" />
                    <input type="password" required placeholder="Enter password" title="" />
                    <input type="password" required placeholder="Confirm your password" title="" />
                    <p>By signing up, you agree to accept our <a href="/">Privacy Policy</a></p>
                    <button type="submit" id="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Register;