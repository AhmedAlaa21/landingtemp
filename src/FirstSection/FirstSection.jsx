import React from "react";
import {Col, Container, Row } from "react-bootstrap";
import "./FirstSection.css";

const FirstSection = () => {
  return (
    <Container className="first-sec text-center" fluid>
      <Row>
        <Col
          sm={12}
          md={6}
          className="px-0"
          style={{ backgroundColor: "#222b38" }}
        >
          <div className="desc">
            <h2 className="desc-head">قطاعة البطاطس السحرية</h2>
            <h2 className="desc-head2">
              وداعا لجروح الايد مع الحل التي تبحث عنه جميع السيدات
            </h2>
            <ul className="desc-ul list-unstyled p-0">
              <li>
                هتنسي زحمة الاكل في رمضان وهتقدري تخزني كل طلباتــك بسهولــة
              </li>
              <li>
                هتنسي زحمة الاكل في رمضان وهتقدري تخزني كل طلباتــك بسهولــة
              </li>
              <li>
                هتنسي زحمة الاكل في رمضان وهتقدري تخزني كل طلباتــك بسهولــة
              </li>
              <li>
                هتنسي زحمة الاكل في رمضان وهتقدري تخزني كل طلباتــك بسهولــة
              </li>
              <li>
                هتنسي زحمة الاكل في رمضان وهتقدري تخزني كل طلباتــك بسهولــة
              </li>
              <li>
                هتنسي زحمة الاكل في رمضان وهتقدري تخزني كل طلباتــك بسهولــة
              </li>
            </ul>
            <button className="desc-btn">
              اطلبي الآن
              <span> بخصم لفترة محدودة </span>
            </button>
          </div>
        </Col>
        {/* image done */}
        <Col
          sm={12}
          md={6}
          className="px-0 d-flex align-items-center"
          style={{ backgroundColor: "#e84c3d" }}
        >
          <div className="first-partition">
            <div className="thumb">
              <img src="white-005.png" alt="thumbnail" className="img-fluid" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FirstSection;
