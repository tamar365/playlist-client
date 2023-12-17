import "./Header.css";
import jwt from "jwt-decode";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const accessToken = localStorage.getItem("accessToken");
  const decoded = jwt(accessToken);

  function logout() {
    localStorage.removeItem("accessToken");
    navigate("/");
  }

  return (
    <div className="header_container">
      <h1 className="header">{decoded.username}'s PLAYLIST</h1>
      <button className="logout" onClick={logout}>Logout</button>
    </div>
  );
}

export default Header;
