import "./Register.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const userNameEntered = useRef("");
  const passwordEntered = useRef("");
  const navigate = useNavigate();
  const [loginMessage, setLoginMessage] = useState("");

  const apiUrl = process.env.REACT_APP_ENV === 'production'
? 'https://playlist-backend-qwwb.onrender.com'
: 'http://localhost:3002';

  async function register() {
    setLoginMessage("");
    if (userNameEntered.current.value && passwordEntered.current.value) {
      const response = await fetch(`${apiUrl}/api/users/register`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          username: userNameEntered.current.value,
          password: passwordEntered.current.value,
        }),
      });
      const status = response.status;
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

  function back() {
    navigate("/");
  }

  return (
    <div className="register_container">
      <div className="back_container">
        <button className="backBtn" onClick={back}>
          {"Back >"}
        </button>
      </div>
      <div className="inputFields">
        <div className="title">
          <h1 className="registerTitle">REGISTER</h1>
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
          <button type="button" className="registerBtn" onClick={register}>
            Sign Up
          </button>
        </div>
        <p className="errorMessage">{loginMessage}</p>
      </div>
    </div>
  );
}

export default Login;
