import React, { useState, useEffect, useRef } from "react";
import "./ForthSection.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";
import img14 from "../images/img14.jpg";
import img16 from "../images/img16.jpg";
import img18 from "../images/img18.jpg";
import img19 from "../images/img19.jpg";
import img10 from "../images/img10.jpg";
import "animate.css/animate.min.css";

const ForthSection = () => {
  const images = [img14, img16, img18, img19, img10];

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const imageRefs = useRef([]); // Create refs to track images' visibility

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const animationClass =
                entry.target.dataset.index % 2 === 0
                  ? "animate__fadeInLeftBig"
                  : "animate__fadeInRightBig";
              entry.target.classList.add("animate__animated", animationClass);
            }
          });
        },
        { threshold: 0.1 } // Trigger when 10% of the image is visible
      );

      imageRefs.current.forEach((img) => {
        if (img) {
          observer.observe(img);
        }
      });

      return () => {
        imageRefs.current.forEach((img) => {
          if (img) {
            observer.unobserve(img);
          }
        });
      };
    }
  }, [isMobile]);

  return (
    <Container className="cont-4">
      <Row className="row-cont-4">
        <Col className="col-cont-4" xl={12} lg={12} md={12} sm={12}>
          <p>OUR FLOWERS</p>
          <h1>SHOP BEST SELLERS</h1>
          <div className="scroller">
            <ul className={isMobile ? "no-scroll" : "scroll"}>
              {(isMobile ? images : images.concat(images)).map(
                (image, index) => (
                  <li key={index}>
                    <img
                      ref={(el) => (imageRefs.current[index] = el)} // Add each image to refs
                      src={image}
                      alt={`img${index}`}
                      data-index={index} // Store the index to differentiate animations
                      className="imgGr"
                    />
                    {/* <p>Lorem, ipsum dolor.</p> */}
                  </li>
                )
              )}
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ForthSection;
