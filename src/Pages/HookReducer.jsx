import React, { useReducer, useContext } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { keranjangContext } from '../App';

const HooksReducer = () => {

  const countContext = useContext(keranjangContext)

  function tambah() {
    countContext.keranjangDispatch({ type: "tambah" });
  }

  function kurang() {
    if (countContext.keranjangState.jumlah >= 1) {
      countContext.keranjangDispatch({ type: "kurang" });
    }
  }

  return (
    <div className="mt-3">
      <h2>Produk</h2>
      <hr />
      <Row>
        <Col>
          <Card style={{ width: "32rem" }}>
            <Card.Img variant="top" src="../Assets/scanner.png" />
          </Card>
        </Col>
        <Col>
          <h3>Scanner</h3>
          <p>Harga</p>
          <p>Rp. {countContext.keranjangState.hargaSatuan}</p>
          <p>Jumlah</p>
          <Row clasName="d-flex justify-content-center">
            <Col>
              <Button variant="danger" onClick={() => kurang()}>
                {" "}
                -{" "}
              </Button>
            </Col>
            <Col>
              <p>{countContext.keranjangState.jumlah}</p>
            </Col>
            <Col>
              <Button variant="primary" onClick={() => tambah()}>
                {" "}
                +{" "}
              </Button>
            </Col>
          </Row>
          <Button className="mt-3" variant="success">
            Total Harga Rp. {countContext.keranjangState.hargaTotal}
          </Button>
          {" "}
          <Button className="mt-3" variant="primary" as={Link} to='tagihan'>
            Checkout
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default HooksReducer;
