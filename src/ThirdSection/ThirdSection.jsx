import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ThirdSection.css";

const ThirdSection = () => {
  return (
    <Container className="third-sec text-center">
      <div className="order">
        <h1 className="order-head">اطلبي الان وانسي زحمة الثلاجة</h1>
        <Row className="px-5">
          <Col sm={12} md={7}>
            <div className="img-container">
              <img
                src="price-tag-desktop.png"
                alt="price tag 120 LE"
                className="img-fluid"
              />
            </div>
          </Col>
          {/* start form */}
          <Col sm={12} md={5}>
            <div class="form">
              <div class="form-head">
                برجاء التسجيل الآن وسوف يقوم احد
                <br />
                ممثلي خدمة المبيعات بالتواصل معكم
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control form-control-input"
                  id="text"
                  placeholder="الآسم"
                  name="entry.119256389"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control form-control-input"
                  type="number"
                  minlength="11"
                  maxlength="11"
                  data-label="Phone"
                  name="entry.127422458"
                  id="form-phone"
                  placeholder="رقم التليفون"
                  required
                />
              </div>
              <div class="clearfix"></div>
              <button className="form-btn" >
                اطلبي الآن
                <span> بخصم لفترة محدودة </span>
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default ThirdSection;
