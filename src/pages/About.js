import { Container, Row, Col } from "react-bootstrap";

export const About = () => {
  return (
    <Container className="py-5">
      <h1 className="text-danger">About Bhakti Marg 2024</h1>
      <Row className="mt-4">
        <Col md={6}>
          <h3>Our Mission</h3>
          <p>
            Welcome to <b>Bhakti Marg 2024</b> a divine gathering celebrating
            the glory of Indian gods and spiritual wisdom. Our event brings
            together revered spiritual leaders, scholars, and devotees to
            immerse in bhajans, discourses, and cultural performances that
            uplift the soul.
          </p>
        </Col>
        <Col md={6}>
          <h3>What to Expect</h3>
          <ul>
            <li>
              <b>Soulful Bhajans & Kirtans:</b> Experience divine melodies
              dedicated to Indian gods.
            </li>
            <li>
              <b>Inspirational Discourses:</b> Spiritual leaders share wisdom
              from sacred scriptures.
            </li>
            <li>
              <b>Rituals & Aartis:</b> Participate in traditional prayers and
              offerings.
            </li>
            <li>
              <b>Meditation & Chanting:</b> Connect deeply through guided
              sessions.
            </li>
            <li>
              <b>Cultural Performances:</b> Classical dance and storytelling of
              divine legends.
            </li>
            <li>
              <b>Blessings & Darshan:</b> Seek spiritual grace from revered
              saints and idols.
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};
