import React from "react";

const Skills = (props) => {
  let {skills = ["Javascript"]} = props;

  return (
    <div className="skill-list">
      {
        skills.map((skill, index) => {
          return (
            <div className="skill" key={index}>
              {skill}
            </div>
          );
        })
      }
    </div>
  );
}

const ProjectCard = (props) => {
  let {title, description, skills} = props;

  return (
    <div className="card">
      <div className="content">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <Skills skills={skills} />
      </div>
    </div>
  );
}

export default ProjectCard;
