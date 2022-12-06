import { Link } from "react-router-dom";
import "./Projects.css";

const Projectcard = ({ project }) => {
    const project_use = project.use.map(item => (
        <span key={item}>{item}</span>
    ))

    const project_feature = project.feature.map(item => (
        <li key={item}>{item}</li>
    ))
    return (
        <div className="project_list" data-aos="zoom-in" data-aos-duration="1500">
            <h4>{project.name}</h4>
            <h6>{project.description}</h6>
            <div className="project_use">
                {project_use}
            </div>
            <div className="project_feature">
                <hr />
                <h6>Features</h6>
                <ul>
                    {project_feature}
                </ul>
            </div>
            <div className="project_link_flex">
                <div className="project_link">
                    <img src="assets/img/github_icon.svg" alt="Github Link" />
                    <a href={project.github_link_front} target="_blank">Check Here</a>
                </div>
                <div className="project_link">
                    <img src="assets/img/server_icon.svg" alt="Github Link" />
                    <a href={project.live_link} target="_blank">Check Here</a>
                </div>
            </div>

        </div>
    )
}

export default Projectcard;