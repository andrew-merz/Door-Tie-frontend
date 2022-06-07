import Nav from "../components/Nav";

function Login() {
  return (
    <div>
      <Nav />
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="username" />
        <br></br>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
