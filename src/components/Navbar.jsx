import { useState } from "react";


function Navbar() {

  const [open, setOpen] = useState(false);


  return (
    <nav className="navbar">

      <div className="logo">
        B.E.C
      </div>


      <div 
        className={`nav-links ${open ? "active" : ""}`}
      >

        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>

      </div>


      <div 
        className="menu-toggle"
        onClick={() => setOpen(!open)}
      >

        <span></span>
        <span></span>
        <span></span>

      </div>


    </nav>
  );
}


export default Navbar;
