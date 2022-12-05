import { PROJECT_LIST } from "../../../data/Projectslist";
import Projectcard from "./Projectcard";


const Projects = () => {
    const project_card = PROJECT_LIST.map(item => (
        <Projectcard
            key={item.id}
            project={item}
        />
    ))

    return (
        <div className="project">
            {project_card}
        </div>
    )
}
export default Projects;