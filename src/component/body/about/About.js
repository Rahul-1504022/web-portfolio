import "./About.css";

const About = () => {
    return (
        <div className="about">
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
            </div>
        </div>
    )
}
export default About;