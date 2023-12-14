import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/Register" element={<Register/>} />
          <Route exact path="/Home" element={<Home/>} />
        </Routes>
      </Router>
  );
}

export default App;
