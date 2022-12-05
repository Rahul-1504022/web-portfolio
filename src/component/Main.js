import About from "./body/about/About";
import Skills from "./body/skills/Skills";
import Nav from "./header/navbar/Nav";
import Projects from "./body/projects/Projects";
import BgImage from "./bgimage/BgImage";
import "./Main.css";
const Main = () => {
    return (
        <div className="main">
            <BgImage />
            {/* <Nav /> */}
            <About />
            <Skills />
            <Projects />
        </div>
    )
}

export default Main;