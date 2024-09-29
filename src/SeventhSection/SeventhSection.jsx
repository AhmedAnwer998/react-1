import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";
import "./SeventhSection.css";
import img14 from "../images/img14.jpg";
import img16 from "../images/img16.jpg";
import img27 from "../images/img27.jpg";
import img29 from "../images/img29.jpg";
import img30 from "../images/img30.jpg";

const SeventhSection = () => {
  return (
    <Container className="cont-7">
      <Row className="row-7">
        <Col className="col-1-7" xl={3} lg={6} md={6} sm={12}>
          {" "}
          <img src={img14} alt="img14" />
          <h3>Small Leather Bag</h3>
          <p>$96.64-$115.02</p>
        </Col>

        <Col className="col-1-7" xl={3} lg={6} md={6} sm={12}>
          {" "}
          <img src={img16} alt="img16" />
          <h3>Ergonomic Leather Keyboard</h3>
          <p>$27.82-$758.49</p>
        </Col>

        <Col className="col-1-7" xl={3} lg={6} md={6} sm={12}>
          {" "}
          <img src={img27} alt="img27" />
          <h3>Rustic Leather Shoes</h3>
          <p>$797.29</p>
        </Col>

        <Col className="col-1-7" xl={3} lg={6} md={6} sm={12}>
          {" "}
          <img src={img29} alt="img29" />
          <h3>Intelligent Ruber Keyboard</h3>
          <p>$53.65</p>
        </Col>
        <Col className="col-2-7" xl={12} lg={12} md={12} sm={12}>
          <div className="div-7">
            <img src={img30} alt="img30" />
          </div>
          <div className="text-7">
            <p>SHARE THE LOVE</p>
            <h1>30% off</h1>
            <h2>Summer Blooms</h2>
            <p>Our gorgeuos summer collection is free</p>
            <button>SHOP NOW</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SeventhSection;
