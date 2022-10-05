import React from "react";
import logo from "../img/React-icon.svg.png"

export default function Navbar(props) {
  return (
    <nav className={props.darkMode? "navbar nav-dark" : "navbar light"}>
      <div className="logo">
        <img 
          className="logo-icon"
          src={logo} 
          alt="react-logo"
        />
        <h1>ReactFacts</h1>
      </div>    
      <div></div>      
      <img 
        className="toggle-icon"
        src={props.darkMode? "./images/dark-toggle.svg" : "./images/light-toggle.svg"} 
        alt="toggle mode"
        onClick={() => props.toggleDarkMode()}
      />       
    </nav>    
  )  
}