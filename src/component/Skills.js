import html from "../css/img/icon/HTML.svg";
import css from "../css/img/icon/CSS.svg";
import javaScript from "../css/img/icon/JavaScript.svg";
import typeScript from "../css/img/icon/TypeScript.svg";
import react from "../css/img/icon/React-Light.svg";
import nextjs from "../css/img/icon/NextJS-Light.svg";
import tailwind from "../css/img/icon/TailwindCSS-Light.svg";
import docker from "../css/img/icon/Docker.svg";
import githubActions from "../css/img/icon/GithubActions-Light.svg";
import node from "../css/img/icon/NodeJS-Light.svg";
import java from "../css/img/icon/Java-Light.svg";
import spring from "../css/img/icon/Spring-Light.svg";
import mysql from "../css/img/icon/MySQL-Light.svg";
import gradle from "../css/img/icon/Gradle-Light.svg";
import git from "../css/img/icon/Git.svg";
import nginx from "../css/img/icon/Nginx.svg";
import github from "../css/img/icon/Github-Light.svg";
import aws from "../css/img/icon/AWS-Light.svg";

const skillIcons = [
  { src: html, name: "HTML" },
  { src: css, name: "CSS" },
  { src: javaScript, name: "JavaScript" },
  { src: typeScript, name: "TypeScript" },
  { src: react, name: "React" },
  { src: nextjs, name: "Next.js" },
  { src: tailwind, name: "Tailwind CSS" },
  { src: node, name: "Node.js" },
  { src: java, name: "Java" },
  { src: spring, name: "Spring" },
  { src: mysql, name: "MySQL" },
  { src: gradle, name: "Gradle" },
  { src: nginx, name: "Nginx" },
  { src: docker, name: "Docker" },
  { src: githubActions, name: "GitHub Actions" },
  { src: git, name: "Git" },
  { src: github, name: "GitHub" },
  { src: aws, name: "AWS" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <div className="skills_all">
        <div className="section_title">
          <h3>SKILLS</h3>
        </div>
        <div className="skills_content content">
          <div className="section_content skills_icon">
            {skillIcons.map((skill) => (
              <img src={skill.src} alt={skill.name} title={skill.name} key={skill.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
