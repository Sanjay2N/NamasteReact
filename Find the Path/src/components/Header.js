import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
let btnName = "Login";

export const Header = () => {
  const [btnNameReact, changebtnName] = useState("Login"); //new instance will be created on change
  console.log("header called");

  //if second arg not given useEffect will be called on every render of component
  //if sencond arg in [] useEffect will be called on first render(just once)
  //if dependencies given ,useEffect will called on change in dependencies
  useEffect(() => {
    console.log("Header ..............");
  }, [btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="/contacts">Contact Us</a>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact == "Login"
                ? changebtnName("Logout")
                : changebtnName("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
const Header1 = () => {};
export default Header1;
