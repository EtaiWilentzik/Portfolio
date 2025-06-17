// components/About.jsx
import {techStack} from "../utils/techStack";
import "./About.css"



export default function About() {
    return(
        <>
            <TechStack />
        </>
    )
}
function TechStack() {
    return (
        <section >
        <div className="tech-stack container " id="techStack"> 
            <h2 className="heading-secondary margin-bottom-md center-text">Technologies I have worked with</h2>
            {techStack.map((tech, index) => {
                const category = tech.category;
                const items = tech.items;
                return (
                    <div key={index} className="main-tech">
                        <CategoryList category={category} items={items} />
                    </div>
                );
            })}
        </div>
        </section>

    );
}

function CategoryList({category, items}) {

    return (
        <div className="category-list">
            <h3 className="category">{category}</h3>
            <div className="items">
                {items.map((item, index) => (
                    <StackItem key={index} name={item.name} Icon={item.icon} />
                ))}
            </div>
        </div>
    );
}
function StackItem({ name, Icon }) {
    return (
        <div className="tech-item">
            <Icon className="icon" />
            <span className="icon-name">{name}</span>
        </div>
    );
}

