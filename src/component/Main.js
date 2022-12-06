import About from "./body/about/About";
import Skills from "./body/skills/Skills";
import Nav from "./header/navbar/Nav";
import Projects from "./body/projects/Projects";
import BgImage from "./bgimage/BgImage";
import "./Main.css";
import Education from "./body/education/Education";

const Main = () => {
    return (
        <div className="main">
            <BgImage />
            {/* <Nav /> */}
            <div data-aos="fade-up" data-aos-duration="1500">
                <About />
            </div>
            <div data-aos="fade-right" data-aos-duration="2000" data-aos-delay="500">
                <Education />
            </div>
            <div>
                <Skills />
            </div>
            <div>
                <Projects />
            </div>
        </div>
    )
}

export default Main;