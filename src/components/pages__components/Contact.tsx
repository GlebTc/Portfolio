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
        <div className="contact">
            <div className="contact-title">
                <h1>{title}</h1>
            </div>
            <div className="contact-form">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} value={message} onChange={(e) => setMessage(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicSubmit">
                        <Form.Label>Submit</Form.Label>
                        <Form.Control type="submit" value="Submit"/>
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