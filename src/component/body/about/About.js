import "./About.css";

const About = () => {
    return (
        <div className="about">
            <div data-aos="fade-up" data-aos-duration="1500">
                <h2>About</h2>
                <div className="about_content">
                    <div className="card about_img">
                        <img src="assets/img/my_img.jpg" alt="image" className="card-img-top" />
                    </div>
                    <div className="about_text">
                        <h4>MD.SHAHRIAR MRIDHA RAHUL</h4>
                        <h6>CHITTAGONG UNIVERSITY OF ENGINEERING AND TECHNOLOGY</h6>
                        <i>B.Sc in Computer Science and Engineering</i>
                        <p>Date Of Birth : 26 JAN. 1997</p>
                    </div>
                    <div className="about_intro">
                        <p>I'm Shahriar , from Bangladesh . I've completed B.Sc Engineering degree on Computer Science & Engineering from Chittagong University of Engineering & Technology (CUET).
                            As a Computer Science student I always try to learn new technologies.I'm a fresh graduate. I want to be a Full Stack Web Developer.
                            For this, I have learnt "Full Stack web developing on MERN stack". It is a six month duration course .
                            I also have interest on Machine Learning , Artificial Intelligence and Software development. I try to learn new things everyday.
                            With my skills, I'm planning to do something good in the field of Computer Science, that's my aim</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;