import "./Hero.css";
import { FaGithub,FaLinkedin } from "react-icons/fa6";


export function Hero() {
  return (
    <section className="section-hero  container-large" id="About">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">
            Hi! I'm <span className="bold">Etai Wilentzik </span> Software Developer 
          </h1>
          <p className="hero-description">
            I am a software developer with a passion for creating innovative solutions. 
            I hold a BSc in Computer Science and have experience with various technologies
            
          </p>
          <p className="hero-description">
            I'm a hard worker who enjoys working on challenging projects, collaborating with others, and  always eager to learn new skills.
          </p>
          <a href="#cta" className="btn btn--full margin-right-sm center-text">
             github  
            <FaGithub />
          </a>
          <a href="#how" className="btn btn--outline">
           linkedin 
            <FaLinkedin />
          </a>

        </div>

        <div >
          <img src="image.jpg" className="hero-img" alt="me" />
        </div>
      </div>
    </section>
  );
}