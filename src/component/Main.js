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
import { useEffect, useState } from "react";

const Main = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 7000);
    }, []);

    return (
        <div>
            {loading &&
                <div className="loading">
                    <span>LOADING</span>
                </div>}
            {!loading &&
                <div className="main">
                    <BgImage />
                    {/* <Nav /> */}
                    <About />
                    <div className="edu_train">
                        <Education />
                        <Training />
                    </div>
                    <Skills />
                    <Projects />
                    <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                        <Contact />
                        <Footer />
                    </div>
                </div>}

        </div>
    )
}

export default Main;