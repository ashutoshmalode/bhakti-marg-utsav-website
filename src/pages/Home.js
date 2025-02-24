import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { speakers } from "../data/speakers";
import CountdownTimer from "../components/CountdownTimer";

export const Home = () => {
  return (
    <>
      <section className="hero bg-dark text-white py-5">
        <Container>
          <h1 style={{ color: "orange" }}>Bhakti Marg 2024</h1>
          <p className="lead">The Mercy of the Lord.</p>
          <Button variant="light" size="lg">
            Register Now
          </Button>
          <CountdownTimer />
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <h2 className="mb-4">Featured Speakers</h2>
          <Row>
            {speakers.slice(0, 3).map((speaker) => (
              <Col md={4} key={speaker.id}>
                <Card className="mb-4">
                  <Card.Img variant="top" src={speaker.image} />
                  <Card.Body>
                    <Card.Title>{speaker.name}</Card.Title>
                    <Card.Subtitle className="text-danger">
                      {speaker.title}
                    </Card.Subtitle>
                    <p className="my-2">{speaker.bio}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};
