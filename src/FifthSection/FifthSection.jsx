import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";
import "./FifthSection.css";
import img21 from "../images/img21.jpg";
import img22 from '../images/img22.jpg';
import img23 from "../images/img23.jpg";


const FifthSection = () => {
  return (
    <Container className="cont-5">
      <Row className="row-5">
        <Col className="cont-5-col-5">
          <p>DON'T MISS</p>
          <h1>Flowers Collection</h1>

          <div className="images-cont-5">
            <div>
              <img src={img21} alt="img21" />
              <h2>Classics Collection</h2>
            </div>

            <div>
              <img src={img22} alt="img22" />
              <h2>Spring Collection</h2>
            </div>

            <div>
              <img src={img23} alt="img23" />
              <h2>Growers Collection</h2>
            </div>
            
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FifthSection;
