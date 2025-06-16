import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { LuMails } from "react-icons/lu";

export function Footer() {
  return (
    <footer className="footer container-small" id="cta">
      <h2 className="footer-heading heading-secondary center-text">
        Let's <span className="bold">Talk</span>
      </h2>
      <p className="footer-text  center-text">
        I'm currently open to new opportunities and collaborations. Whether you have a project in mind, a question, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
      </p>

      <div className="footer-links">
 
<a href="mailto:etaiwil2000@gmail.com" className="mail" aria-label="Email">
  <LuMails className="icon-footer" />
  <span>etaiwil2000@gmail.com</span>
</a>



         <div className="icons">
               <a href="https://github.com" target="_blank" className="icon-footer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com" target="_blank" className="icon-footer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
            
             </div>
     
      </div>
    </footer>
  );
}
