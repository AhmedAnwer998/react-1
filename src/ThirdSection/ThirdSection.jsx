import { useState } from "react";
import "./ThirdSection.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";
import img07 from "../images/img07.jpg";
import img08 from "../images/img08.jpg";
import img09 from "../images/img09.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const ThirdSection = () => {
  const [show, setShow] = useState(false);

  const handleBttn = () => {
    setShow(!show);
  };

  return (
    <Container className="cont-3">
      <Row className="row-cont-3">
        <Col className="col-cont-3" xl={4} lg={6} md={6} sm={12} xs={12}>
          <img src={img07} alt="img07" className="img-3" />
        </Col>

        <Col className="col-2-cont-3" xl={4} lg={6} md={6} sm={12} xs={12}>
          <p>BROWSE BY OCCASSIONS</p>
          <h1>Anniversary</h1>
          <h1>Birthday</h1>
          <h1>Business</h1>
          <h1>Congratulations</h1>
          <h1>Get Well</h1>
          <h1>Graduation</h1>
          <button onClick={handleBttn}>
            <FontAwesomeIcon icon={show ? faMinus : faPlus} /> VIEW MORE
          </button>
        </Col>

        <Col
          className=" col-3-cont-3"
          xl={4}
          lg={12}
          md={12}
          sm={12}
          xs={12}
        >
          <img src={img08} alt="img08" className="img-4" />
          <img src={img09} alt="img09" className="img-5" />
        </Col>
      </Row>
    </Container>
  );
};

export default ThirdSection;
