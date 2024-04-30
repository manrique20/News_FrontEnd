import React from "react";
import Section from "../../Molecules/Section/Section";
import { Col, Container, Row } from "react-bootstrap";

const Body = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col lg="10">
            <Section />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Body;
