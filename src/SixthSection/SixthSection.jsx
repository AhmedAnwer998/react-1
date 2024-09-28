import React from "react";
import "./SixthSection.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";
import img26 from "../images/img26.jpg";
const SixthSection = () => {
  return (
    <Container className="cont-6">
      <Row className="cont-6-row">
        <Col className="col-cont-6" xl={6} lg={6} md={6} sm={12}>
          <p>EVERY DAY FLORALS</p>
          <h1>Same Day Delivery Flowers & Gifts</h1>
          <button>SHOP SAME DAY FLOWERS</button>
        </Col>
        <Col className="col-2-cont-6" xl={6} lg={6} md={6} sm={12}>
          <img src={img26} alt="img26" />
        </Col>
      </Row>
    </Container>
  );
};

export default SixthSection;
