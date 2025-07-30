import "./login.css"
function Login() {
     return (
        <div>
            <div>
                <div >
                    <img src="/images/border.png" width="30%"/>
                </div>
                <form>
                    <h1>Welcome <br /> Back!</h1>
                    <input type="text" required placeholder="Enter username" title="" />
                    <input type="password" required placeholder="Enter password" title="" />
                    <button type="submit" id="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Login;