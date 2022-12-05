import "../bgimage/BgImage.css";

const BgImage = () => {
    return (
        <div className="bg">
            {/* <img className="bg_img" src="assets/img/bg_img_2.jpg" alt="Background" /> */}
            <div className="bg_text">
                <div className="bg_img">
                    <img src="assets/img/linkedin_image_1.jpg" alt="photo" width="300px" />
                </div>
                <h1>Md.Shahriar Mridha Rahul</h1>
                <h3>Passionate Full Stack Web Developer</h3>
                <div className="bg_icon">
                    <a href="https://www.linkedin.com/in/shahriar-mridha-1088bb191/" target="_blank"><img src="assets/img/linkedin_icon.svg" alt="icon" /></a>
                    <a href="https://github.com/Rahul-1504022" target="_blank"><img src="assets/img/github_icon_2.svg" alt="icon" /></a>
                </div>

            </div>
        </div>
    )
}
export default BgImage;