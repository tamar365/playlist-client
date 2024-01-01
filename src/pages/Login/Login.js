import "./Login.css";
import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const apiUrl = process.env.REACT_APP_ENV === 'development'
? 'http://localhost:3002'
: 'https://playlist-backend-qwwb.onrender.com';

function Login() {
  const userNameEntered = useRef("");
  const passwordEntered = useRef("");
  const navigate = useNavigate();
  const [loginMessage, setLoginMessage] = useState("");

  async function login1() {

    setLoginMessage("");
    if (userNameEntered.current.value && passwordEntered.current.value) {
      console.log(userNameEntered.current.value, passwordEntered.current.value)
      const response = await fetch(
        `${apiUrl}/api/users/login`,
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            username: userNameEntered.current.value,
            password: passwordEntered.current.value,
          }),
        }
      );
      const status = response.status;
      console.log(status);
      console.log(response);
      const data = await response.json();
      if (status === 200) {
        localStorage.setItem("accessToken", JSON.stringify(data));
        navigate("/Home");
      } else {
        setLoginMessage("Invalid username or password!");
      }
    } else {
      setLoginMessage("Please enter username and password");
    }
  }

  return (
    <div className="login">
      <div className="inputFields">
        <div className="title">
          <h1>LOGIN</h1>
        </div>
        <div className="inputsContainer">
        <input
          className="userName"
          type="text"
          ref={userNameEntered}
          placeholder="Enter username"
        />
        <input
          className="password"
          type="text"
          ref={passwordEntered}
          placeholder="Enter password"
        />
         <button type="button" className="loginButton" onClick={login1}>
          Sign In
        </button>
        </div>
        <p className="errorMessage">{loginMessage}</p>
        <h4 className="smallTitle">Don't have an account? <Link to="/Register" className="signUp">Sign up</Link></h4>
      </div>
    </div>
  );
}

export default Login;
