import React from "react"
import reactLogo from "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/121px-React-icon.svg.png" 

export default function Header() {
  return (
  <header className="header">
    <nav className="navbar">
      <img 
        className="logo"
        src={reactLogo} 
        alt="react image"
      /> 
        <ul className="list">            
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
    </nav>    
  </header>  
  )  
}