import React, { useState } from "react";
import "./FirstSection.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const FirstSection = () => {
  // State to track the current slide (text in button)
  const [currentSlide, setCurrentSlide] = useState(0);

  // Texts corresponding to the dots
  const buttonTexts = [
    "SHOP MOTHER'S DAY",
    "SHOP BIRTHDAY",
    "SHOP ANNIVERSARY",
  ];

  // Handle dot click
  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  // Handle button click to go to the next text
  const handleButtonClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % buttonTexts.length);
  };

  return (
    <Container className="fSec-1">
      <Row>
        <Col className="content-bg" xl={12} lg={12} md={6} sm={6} xs={6}>
          <h1>It's Almost Mom's Day</h1>
          <p>Celebrate Mom with Beautiful flowers</p>

          {/* Button with click functionality */}
          <button className="small-swiper" onClick={handleButtonClick}>
            {buttonTexts[currentSlide]}{" "}
            <FontAwesomeIcon className="icon2" icon={faGreaterThan} />
          </button>

          {/* Pagination dots */}
          <div className="pagination-dots">
            {buttonTexts.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentSlide === index ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FirstSection;
