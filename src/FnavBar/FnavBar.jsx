import React from "react";
import "./FnavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import img02 from "../images/img02.svg";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";
const FnavBar = () => {
  return (
    <Container fluid >
      <Row className=" d-flex justify-content-center align-items-center"
      style={{minWidth:"100%",minHeight:"25vh"}}>
        
        <Col
          xl={4}
          lg={4}
          md={6}
          sm={12}
          xs={12}
          className="  d-flex justify-content-center align-items-center"
          
        >
          <label htmlFor="search" className="search"><FontAwesomeIcon className="Search-icon" icon={faSearch} /></label>
          <input
            type="search"
            className="input"
            name="search"
            placeholder="Search"
          />
          
        </Col>

        <Col
          xl={4}
          lg={4}
          md={6}
          sm={12}
          xs={12}
          className=" d-flex
          justify-content-center
          align-items-center"
          
        >
          <img src={img02} alt="img02" />
        </Col>

        <Col
          xl={4}
          lg={4}
          md={12}
          sm={12}
          xs={12}
          className="   d-flex
          justify-content-center
          align-items-center"
          
        >
          <a className="account me-2" href="#">
            My Account
          </a>
          <FontAwesomeIcon className="BagShopping" icon={faBagShopping} />
          <sup>0</sup>
        </Col>
        <Col
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className="border-bottom-hr"
        ></Col>
      </Row>
    </Container>
  );
};

export default FnavBar;
