import { useState } from "react";
import { Form } from "react-bootstrap";

const Contact = ({title, id}:{title: string, id:string}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = (e:any) => {
        e.preventDefault();
        if(name === "" || email === "" || message === "") {
            setError("All fields are required");
        } else {
            setError("");
            setSuccess("Message sent");
        }
    }

    return (
        <div className="contact"  id={id}>
            <h1>{title}</h1>
            <div className="content__container">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicName" className="form__item">
                        <Form.Label className="label">Name</Form.Label>
                        <Form.Control className="contact__form__input__field" type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail" className="form__item">
                        <Form.Label className="label">Email address</Form.Label>
                        <Form.Control className="contact__form__input__field" type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicMessage" className="form__item">
                        <Form.Label className="label">Message</Form.Label>
                        <Form.Control className="contact__form__input__field" as="textarea" placeholder="Message" rows={3} value={message} onChange={(e) => setMessage(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicSubmit" className="form__item">
                        <Form.Control className="contact__form__submit__btn" type="submit" value="Submit"/>
                    </Form.Group>
                </Form>
            </div>
            <div className="contact-error">
                <p>{error}</p>
            </div>
            <div className="contact-success">
                <p>{success}</p>
            </div>
        </div>
    )
}

export default Contact