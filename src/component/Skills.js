import html from "../css/img/icon/HTML.svg"
import css from "../css/img/icon/CSS.svg"
import javaScript from "../css/img/icon/JavaScript.svg"
import react from "../css/img/icon/React-Light.svg"
import node from "../css/img/icon/NodeJS-Light.svg"
import java from "../css/img/icon/Java-Light.svg"
import spring from "../css/img/icon/Spring-Light.svg"
import mysql from "../css/img/icon/MySQL-Light.svg"
import gradle from "../css/img/icon/Gradle-Light.svg"
import git from "../css/img/icon/Git.svg"
import nginx from "../css/img/icon/Nginx.svg"
import github from "../css/img/icon/Github-Light.svg"
import aws from "../css/img/icon/AWS-Light.svg"

const Skills = () => {
    return (
        <section id="skills" className="skills section">
          <div className="skills_all">
            <div className="section_title">
                <h3>SKILLS</h3>
            </div>
            <div className="skills_content content">
              <div className="section_content skills_icon">
                <img src={html} alt="skills"/>
                <img src={css} alt="skills"/>
                <img src={javaScript} alt="skills"/>
                <img src={react} alt="skills"/>
                <img src={node} alt="skills"/>
                <img src={java} alt="skills"/>
                <img src={spring} alt="skills"/>
                <img src={mysql} alt="skills"/>
                <img src={gradle} alt="skills"/>
                <img src={nginx} alt="skills"/>
                <img src={git} alt="skills"/>
                <img src={github} alt="skills"/>
                <img src={aws} alt="skills"/>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Skills