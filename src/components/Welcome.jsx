import React from "react";
import { Button, Col, Row, Container } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const goToCalculator = () => {
    navigate("/calculator");
  };

  return (
    <Container
      fluid
      className="justify-content-center align-items-center bg-gray-300 min-h-screen"
    >
      <Col xs="12">
        <div className="justify-center p-5">
          <h1 className="text-center p-5">Welcome</h1>
          <Row className="justify-content-center align-items-center mb-4">
            <Col className="text-center mb-3">
              <Button className="text-center" onClick={goToCalculator}>
                Go to Calculator
              </Button>
            </Col>
          </Row>
        </div>
      </Col>
    </Container>
  );
};

export default Welcome;
