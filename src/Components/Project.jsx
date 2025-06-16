import "./Project.css";
import { projects } from "../utils/Projects";
import { FaGithub } from "react-icons/fa6";


export function Project() {
  return (
    <section className="container project-section">
   <h2 className="heading-secondary center-text margin-bottom-md ">Selected projects </h2>

      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
          tags={project.tags}
          index={index}
        />
      ))}
    </section>
  );
}

function ProjectCard({ title, description, image, link, tags, index }) {
  // Add 'reverse' class for odd indexes to create Z-pattern
  const isReverse = index % 2 === 0;
  
  return (
    <div className={`project ${isReverse ? 'reverse' : ''}`}>
      {/* Image positioned absolutely behind content */}
      <img 
        src={image}
        alt={title}
        className="project-image"
      />
      
      {/* Content box that overlaps the image */}
      <div className="project-content">
        <p className="project-title">{title}</p>
        <p className="project-description">{description}</p>
        
        {/* Tags */}
        <div className="tags-container">
          {tags.map((tag, tagIndex) => (
            <div key={tagIndex} className="tag">
              <div className="tag-content">{tag}</div>
            </div>
          ))}
        </div>
        
       
        <div className="project-links">
  
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
            <FaGithub className="icon-small" />
         
          </a>
        </div>
      </div>
    </div>
  );
}

