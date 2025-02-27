import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return ( 
    <div className="projects-section">
        <div className="project-text">
            <h4> Some projects will be here...</h4>
        </div>

        <div className="projects-container">
            <ProjectCard
                image = "https://placehold.co/600x400"
                title = "Test"
                description = "Lorem ipsum odor amet, consectetuer adipiscing elit. Felis vivamus nisl egestas penatibus odio ac. Quam urna nascetur, pretium lacus sapien morbi libero. Id class dui ridiculus mauris integer at, suscipit quam. Montes porttitor in eleifend pellentesque accumsan ad ad placerat. Class vehicula sagittis consequat sem praesent ornare. Lacinia dictum tortor purus; conubia enim ultrices hac. Sollicitudin pellentesque justo fermentum blandit in suscipit vel vulputate. Nascetur pellentesque leo a sagittis dui. Quis suscipit auctor vel non mus sociosqu nascetur."
                link1="https://exemple.com"
            />
            <ProjectCard
                image = "https://i1.wp.com/oeuf-poule-poussin.com/wp-content/uploads/2016/05/envol-2904-.jpg?fit=1200%2C803&ssl=1"
                title = "Test2"
                description = "This is a test"
                link1="https://exemple.com"
                link2="https://github.com"
            />
        </div>
    </div>
  );
}

export default Projects;