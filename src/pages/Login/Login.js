import "./Login.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const userNameEntered = useRef("");
  const passwordEntered = useRef("");
  const navigate = useNavigate();
  const [loginMessage, setLoginMessage] = useState("");

  async function login1() {
    setLoginMessage("");
    if (userNameEntered.current.value && passwordEntered.current.value) {
      const response = await fetch(
        "https://playlist-backend-qwwb.onrender.com/api/users/login",
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

  function register() {
    setLoginMessage("");
    if (userNameEntered.current.value && passwordEntered.current.value) {
      fetch("https://playlist-backend-qwwb.onrender.com/api/users/register", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          username: userNameEntered.current.value,
          password: passwordEntered.current.value,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      setLoginMessage("Please enter the login button");
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
        <h4 className="smallTitle">If you are already registered-login:</h4>
        <button type="button" className="registerButton" onClick={register}>
          REGISTER
        </button>
        <button type="button" className="loginButton" onClick={login1}>
          LOGIN
        </button>
        <p className="errorMessage">{loginMessage}</p>
      </div>
    </div>
  );
}

export default Login;
