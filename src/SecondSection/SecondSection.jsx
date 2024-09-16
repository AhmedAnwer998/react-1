import React from 'react';
import "./SecondSection.css";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import img05 from "../images/img05.jpg";




const SecondSection = () => {


  return (
    <Container className='Cont-2'>
      <Row className='row-cont-2'>
        <Col className='col-row-cont-2' xl={4} lg={4} md={12} sm={12} xs={12}>
          <p>WHO WE ARE</p>
          <h1>Online FLower Delivery Experts</h1>
          <p>
            Our team of experts has years of experience in the online flower
            delivery industry.
          </p>
          <button className='btn3'>
            LEARN MORE{" "}
            <FontAwesomeIcon className="icon3" icon={faGreaterThan} />{" "}
          </button>
        </Col>
        <Col className='col2-row-cont-2' xl={8} lg={8} md={12} sm={12} xs={12}>
          <img className="img05" src={img05} alt="img05" />
        </Col>
      </Row>
    </Container>
  );
}

export default SecondSection