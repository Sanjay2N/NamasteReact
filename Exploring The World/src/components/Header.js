import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

let btnName = "Login";

export const Header = () => {
  const [btnNameReact, changebtnName] = useState("Login"); //new instance will be created on change
  console.log("header called");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
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
