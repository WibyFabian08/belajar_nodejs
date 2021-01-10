import React from "react";
import NavbarComp from "../Component/Functional/NavbarComp";
import CardComp from "../Component/Class/CardComp";
import { Container, Row, Col, Button } from "react-bootstrap";

class Blog extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <div className="header">
            <NavbarComp></NavbarComp>
          </div>
          <div className="body mt-3">
            <Row>
              <Col>
                <CardComp id='1' judul='Rumah Modern' tanggal='09-01-2021'></CardComp>
              </Col>
              <Col>
                <CardComp id='2' judul='Rumah Classic' tanggal='09-01-2021'></CardComp>
              </Col>
              <Col>
                <CardComp id='3' judul='Rumah Minimalis' tanggal='09-01-2021'></CardComp>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Blog;
