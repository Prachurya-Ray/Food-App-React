import { useState } from "react";
import logo from "../img/foodVilla.png";
import { Link } from "react-router-dom";

const menuColor = {
  color: "green",
};

const Title = () => {
  return (
    <Link to="/">
      <img className="logo" src={logo} />
    </Link>
  );
};

const Header = () => {
  const [logedIn, setLogedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul style={menuColor}>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      <div className="signup-btn">
        {logedIn ? (
          <button onClick={() => setLogedIn(false)}>Log In</button>
        ) : (
          <button onClick={() => setLogedIn(true)}>Sign Out</button>
        )}
      </div>
    </div>
  );
};

export default Header;
