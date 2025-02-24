import { useState } from "react";
import { Container, Tabs, Tab, ListGroup, Badge } from "react-bootstrap";
import { schedule } from "../data/schedule";

export const Schedule = () => {
  const [activeTab, setActiveTab] = useState("day1");

  return (
    <Container className="py-5">
      <h1 className="mb-4">utsav Schedule</h1>
      <Tabs
        activeKey={activeTab}
        onSelect={(k) => {
          setActiveTab(k);
        }}
        className="mb-4"
      >
        <Tab eventKey="day1" title="Day 1 (Oct 20)">
          <div className="mt-3">
            <h4>October 20, 2024</h4>
          </div>
        </Tab>
        <Tab eventKey="day2" title="Day 2 (Oct 21)">
          <div className="mt-3">
            <h4>October 21, 2024</h4>
          </div>
        </Tab>
        <Tab eventKey="day3" title="Day 3 (Oct 22)">
          <div className="mt-3">
            <h4>October 22, 2024</h4>
          </div>
        </Tab>
      </Tabs>
      <ListGroup>
        {activeTab === "day1" &&
          schedule.day1.map((session, index) => (
            <ListGroup.Item
              key={index}
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{session.time}</div>
                <div>{session.topic}</div>
                <small className="text-muted">Speaker: {session.speaker}</small>
              </div>
              <Badge bg="danger" pill className="text-capitalize">
                {session.track}
              </Badge>
            </ListGroup.Item>
          ))}
        {activeTab === "day2" &&
          schedule.day2.map((session, index) => (
            <ListGroup.Item
              key={index}
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{session.time}</div>
                <div>{session.topic}</div>
                <small className="text-muted">Speaker: {session.speaker}</small>
              </div>
              <Badge bg="danger" pill className="text-capitalize">
                {session.track}
              </Badge>
            </ListGroup.Item>
          ))}
        {activeTab === "day3" &&
          schedule.day3.map((session, index) => (
            <ListGroup.Item
              key={index}
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{session.time}</div>
                <div>{session.topic}</div>
                <small className="text-muted">Speaker: {session.speaker}</small>
              </div>
              <Badge bg="danger" pill className="text-capitalize">
                {session.track}
              </Badge>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </Container>
  );
};
