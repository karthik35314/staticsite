import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
   
      <ul>
          <li style={{    width: "35%",margin: "-14px 15px"}}><h1 style={{color:"white", fontWeight: "300",   margin: "12px 0px"}}>Medicare Center</h1></li>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#news">Users</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#contact">About</a>
        </li>
        <li>
          <a href="#contact">More</a>
        </li>
        
      </ul>
      <div className="logout">  <span style={{marginLeft: "3px"}} >Log Out</span>                              </div>
     
    </div>
  );
};

export default Navbar;
