import "../bgimage/BgImage.css";

const BgImage = () => {
    return (
        <div className="bg">
            {/* <div className="bg_nav">
                <span>About</span>
                <span>Skill</span>
                <span>Projects</span>
                <span>Contact</span>
            </div> */}
            {/* <img className="bg_img" src="assets/img/bg_img_2.jpg" alt="Background" /> */}
            <div className="bg_text">
                <div className="bg_img" data-aos="fade-down" data-aos-duration="1000">
                    <img src="assets/img/linkedin_image_1.jpg" alt="photo" width="300px" />
                </div>
                <h1 data-aos="fade-up" data-aos-duration="1000">Md.Shahriar Mridha Rahul</h1>
                <h3 data-aos="fade-up" data-aos-duration="1000">Passionate Full Stack Web Developer</h3>
                <div className="bg_icon" data-aos="fade-right" data-aos-duration="1000">
                    <a href="https://www.linkedin.com/in/shahriar-mridha-1088bb191/" target="_blank"><img src="assets/img/linkedin_icon.svg" alt="icon" /></a>
                    <a href="https://github.com/Rahul-1504022" target="_blank"><img src="assets/img/github_icon_2.svg" alt="icon" /></a>
                    <a href="https://www.dropbox.com/s/4k9xtcyhpoudjie/Shahriar_CV%28MERN%29.pdf?dl=0" target="_blank"><img src="assets/img/cv_icon.png" alt="icon" /></a>
                </div>

            </div>
        </div>
    )
}
export default BgImage;