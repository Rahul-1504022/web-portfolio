import { Form, Row, Col, FormGroup, Label, Input } from "reactstrap"
import "./Contact.css"
const Contact = () => {
    const contactForm = (
        <Form>
            <Row>
                <Col sm={6}>
                    <FormGroup floating>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            // placeholder="Your Name"
                            disabled
                        />
                        <Label htmlFor="name">
                            Name
                        </Label>
                    </FormGroup>
                </Col>
                <Col sm={6}>
                    <FormGroup floating>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            // placeholder="Email"
                            disabled
                        />
                        <Label htmlFor="email">
                            Email
                        </Label>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <FormGroup floating>
                        <Input
                            id="comment"
                            name="comment"
                            type="textarea"
                            disabled
                        />
                        <Label htmlFor="comment">
                            Comment
                        </Label>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button type="submit" className="btn btn-success" disabled>SUBMIT</button>
                </Col>
            </Row>
        </Form>
    )
    return (
        <div className="contact_form">
            <h2>Contact</h2>
            <h6>Disclose this section soon</h6>
            {contactForm}
        </div>
    )
}
export default Contact;