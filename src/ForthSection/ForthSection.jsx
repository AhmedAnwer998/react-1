import React from "react";
import "./ForthSection.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";
import img14 from "../images/img14.jpg";
import img16 from "../images/img16.jpg";
import img18 from "../images/img18.jpg";
import img19 from "../images/img19.jpg";
import img10 from "../images/img10.jpg";

const ForthSection = () => {
  const images = [img14, img16, img18, img19, img10];

  return (
    <Container className="cont-4">
      <Row className="row-cont-4">
        <Col className="col-cont-4" xl={12} lg={12} md={12} sm={12}>
          <p>OUR FLOWERS</p>
          <h1>SHOP BEST SELLERS</h1>
          <div className="scroller">
            <ul className="scroll">
              {images.concat(images).map((image, index) => (
                <li key={index}>
                  <img src={image} alt={`img${index}`} className="imgGr" />
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ForthSection;
