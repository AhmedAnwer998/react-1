import React, { useRef, useState } from "react";
import "./FirstSection.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const FirstSection = () => {
  return (
    <Container className="fSec-1">
      <Row>
        <Col className="content-bg" xl={12} lg={12} md={12} sm={12} xs={12}>
          <h1>It's Almost Mom's Day</h1>
          <p>Celebrate Mom with Beutiful flowers</p>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide className="swiper-txt">Slide 1</SwiperSlide>
            <SwiperSlide className="swiper-txt">Slide 2</SwiperSlide>
            <SwiperSlide className="swiper-txt">Slide 3</SwiperSlide>
            <SwiperSlide className="swiper-txt">Slide 4</SwiperSlide>
            <SwiperSlide className="swiper-txt">Slide 5</SwiperSlide>
            <SwiperSlide className="swiper-txt">Slide 6</SwiperSlide>
            <SwiperSlide className="swiper-txt">Slide 7</SwiperSlide>
            <SwiperSlide className="swiper-txt">Slide 8</SwiperSlide>
            <SwiperSlide className="swiper-txt">Slide 9</SwiperSlide>
          </Swiper>
        </Col>
      </Row>
    </Container>
  );
};

export default FirstSection;
