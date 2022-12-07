import About from "./body/about/About";
import Skills from "./body/skills/Skills";
import Nav from "./header/navbar/Nav";
import Projects from "./body/projects/Projects";
import BgImage from "./bgimage/BgImage";
import "./Main.css";
import Education from "./body/education/Education";
import Contact from "./body/contact/Contact";
import Footer from "./footer/Footer";
import Training from "./body/education/Training";

const Main = () => {
    return (
        <div className="main">
            <BgImage />
            {/* <Nav /> */}
            <About />
            <div className="row edu_train">
                <div className="col-md-6">
                    <Education />
                </div>
                <div className="col-md-6">
                    <Training />
                </div>
            </div>
            <Skills />
            <Projects />
            <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                <Contact />
                <Footer />
            </div>
        </div>
    )
}

export default Main;