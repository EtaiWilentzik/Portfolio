import { useState } from "react";
import "./Nav.css";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
<a href="#About" >
  <h2 className="logo heading-secondary">Etai Wilentzik</h2>
</a>


      <nav className={`main-nav ${isOpen ? "open" : ""}`}>
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#About">About</a>
          </li>
          <li>
            <a className="main-nav-link" href="#techStack">Tech Stack</a>
          </li>
          <li>
            <a className="main-nav-link" href="#projects">Selected projects</a>
          </li>
          <li>
            <a className="main-nav-link nav-cta" href="#cta">Reach out</a>
          </li>
        </ul> 
      </nav>

      <a href="#" className="buttons" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
    </header>
  );
}
