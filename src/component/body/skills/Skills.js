import { Progress } from "reactstrap";
import "./Skills.css";
import { FRONT_SKILL } from "../../../data/Frontskill";
import Frontendskill from "./Frontendskill";
import Backendskill from "./Backendskill";
import { BACK_SKILL } from "../../../data/Backskill";
import { OTHER_SKILL } from "../../../data/Otherskill";
import Otherskill from "./otherskill";

const Skills = () => {
    const frontSkill = FRONT_SKILL.map(item => (
        <Frontendskill
            key={item}
            skill={item} />
    ))
    const backSkill = BACK_SKILL.map(item => (
        <Backendskill
            key={item}
            skill={item} />
    ))
    const otherSkill = OTHER_SKILL.map(item => (
        <Otherskill
            key={item}
            skill={item} />
    ))
    return (
        <div className="skills">
            <h2>Skills</h2>
            <div>
                <Progress animated className="my-3" color="success" value={90}>
                    HTML
                </Progress>
                <Progress animated className="my-3" color="success" value={75}>
                    CSS
                </Progress>
                <Progress animated className="my-3" color="success" value={70}>
                    BOOTSTRAP
                </Progress>
                <Progress animated className="my-3" color="success" value={85}>
                    JAVASCRIPT
                </Progress>
                <Progress animated className="my-3" color="success" value={80}>
                    REACT.JS
                </Progress>
            </div>
            <div className="skill_list">
                {frontSkill}
            </div>
            <hr />

            <div className="skill_list">
                {backSkill}
            </div>
            <hr />

            <div className="skill_list">
                {otherSkill}
            </div>
        </div>
    )
}

export default Skills;