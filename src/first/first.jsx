import React, { useState } from "react";
import "./first.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const First = () => {
  const [btnColor, setBtnColor] = useState("initial");

  const handleClick = () => {
    setBtnColor("#ce9191c7");

    setTimeout(() => {
      setBtnColor("initial");
    }, 100);
  };

  return (
    <Container fluid className="p-0"  style={{ backgroundColor: "#ffdad9" }}>
      <Row
        style={{ minHeight: "2rem", backgroundColor: "#ffdad9" }}
        className="w-100 m-0 bg-pink d-flex justify-content-center align-items-center "
      >
        <Col
          className="d-flex justify-content-center align-items-center justify-content-xl-end justify-content-lg-end"
          xl={7}
          lg={7}
          md={12}
          sm={12}
        >
          <p className="mb-0 text-center" >
            Save $10 On Mother's Day Flowers With Flex Delivery
          </p>
        </Col>
        <Col
          className="d-flex justify-content-center align-items-center justify-content-xl-start justify-content-lg-start"
          xl={5}
          lg={5}
          md={12}
          sm={12}
        >
          <button
            className="btn1"
            onClick={handleClick}
            id="btn"
            style={{ color: btnColor }}
          >
            Order Now <FontAwesomeIcon className="icon" icon={faGreaterThan} />
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default First;
