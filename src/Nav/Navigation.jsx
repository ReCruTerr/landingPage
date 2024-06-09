import React from "react";
import "./Nav.css";
export default function Navigation() {
  const links = ["Agents", "Homebuyers", "Resources", "Log In"];
  return (
    <div className="Nav">
      <nav className="Nav--items">
        {links.map((e) => (
          <a href="" className="navLinks">
            <p>{e}</p>
          </a>
        ))}
      </nav>
      <a href="" className="SignUp">
        Sign up now
      </a>
    </div>
  );
}
