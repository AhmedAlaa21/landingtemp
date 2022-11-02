import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./SecondSection.css";

const SecondSection = () => {
  return (
    <Container className="second-sec" fluid>
      <Container className="testimonials text-center">
        <h1>آراء عملاءنا في المنتج</h1>
        <Row className="testi">
          <Col sm={12} md={3}>
            <div className="testimonial">
              <h3> منى عزام</h3>
              <div className="testi-img">
                <img src="review-002.png" class="img-fluid" alt="مني العراقي" />
              </div>
              <span>بصراحه جه في وقته قبل رمضان وزحمه الاكل اللي مبتخلصش</span>
            </div>
          </Col>
          <Col sm={12} md={3}>
            <div className="testimonial">
              <h3> منى عزام</h3>
              <div className="testi-img">
                <img src="review-002.png" class="img-fluid" alt="مني العراقي" />
              </div>
              <span>بصراحه جه في وقته قبل رمضان وزحمه الاكل اللي مبتخلصش</span>
            </div>
          </Col>
          <Col sm={12} md={3}>
            <div className="testimonial">
              <h3> منى عزام</h3>
              <div className="testi-img">
                <img src="review-002.png" class="img-fluid" alt="مني العراقي" />
              </div>
              <span>بصراحه جه في وقته قبل رمضان وزحمه الاكل اللي مبتخلصش</span>
            </div>
          </Col>
          <Col sm={12} md={3}>
            <div className="testimonial">
              <h3> منى عزام</h3>
              <div className="testi-img">
                <img src="review-002.png" class="img-fluid" alt="مني العراقي" />
              </div>
              <span>بصراحه جه في وقته قبل رمضان وزحمه الاكل اللي مبتخلصش</span>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default SecondSection;
