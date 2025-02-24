import { Container, Row, Col, Card } from "react-bootstrap";
import { speakers } from "../data/speakers";

export const Speakers = () => {
  return (
    <Container className="py-5">
      <h1>Speakers</h1>
      <Row className="mt-4 g-4">
        {speakers.map((speaker) => (
          <Col key={speaker.id} md={4}>
            <Card>
              <Card.Img variant="top" src={speaker.image} />
              <Card.Body>
                <Card.Title>{speaker.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {speaker.title}
                </Card.Subtitle>
                <Card.Text>{speaker.bio}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
