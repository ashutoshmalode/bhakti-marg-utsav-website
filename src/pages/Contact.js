import { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Container className="py-5">
      <h1>Contact Us</h1>
      <div className="mt-4" style={{ maxWidth: "600px", margin: "0 auto" }}>
        {submitted && (
          <Alert variant="success">Thank you for your message!</Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Send Message
          </Button>
        </Form>
      </div>
      <div className="text-danger mt-5">
        <h3>Location:</h3>
        <iframe
          title="utsav-location"
          width="100%"
          height="600"
          src="https://maps.google.com/maps?q=San%20Francisco%20Convention%20Center&t=&z=15&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>
    </Container>
  );
};
