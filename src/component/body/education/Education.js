
import "./Education.css";

const Education = () => {
    return (
        <div className="education">
            <div data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200">
                <h2>Education</h2>
                <div className="row justify-content-center edu_div">
                    <div className="col-12 edu_list">
                        <h4>Chittagong University of Engineering and Technology</h4>
                        <h5>B.Sc in Computer Science and Engineering</h5>
                        <span>CGPA : 3.44</span>
                    </div>
                    <hr />
                    <div className="col-12 edu_list">
                        <h4>Chittagong College</h4>
                        <h5>HSC</h5>
                        <span>GPA : 5.00</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Education;