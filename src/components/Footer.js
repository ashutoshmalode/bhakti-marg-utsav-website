import { Container, Row, Col } from "react-bootstrap";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="mt-5 py-4 bg-light">
      <Container>
        <Row>
          <Col md={4} className="text-center">
            <h5>Contact Us</h5>
            <p>Email: info@bhaktimarg2024.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </Col>
          <Col md={4} className="text-center">
            <h5>Follow Us</h5>
            <div className="d-flex justify-content-center gap-3">
              <a href="https://x.com/i/flow/login?lang=en">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.linkedin.com/">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.instagram.com/accounts/login/?hl=en">
                <FaInstagram size={24} />
              </a>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <h5>Location</h5>
            <p>San Francisco Convention Center</p>
            <p>747 Howard St, San Francisco, CA</p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>&copy; 2024 Bhakti Marg. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
