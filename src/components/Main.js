import React from "react";
import logo from "../img/React-icon.svg.png"

export default function Main(props) {
  return (
    <main className={props.darkMode? "main-container main-container-dark" : "main-container main-container-light"}>
      <h1>Fun facts about React</h1>
      <ul className="list-of-facts">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>      
      </ul>
      <img 
        src={logo} 
        className="background-img" 
        alt="background" 
      />
    </main>
  )
}