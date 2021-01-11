import React, { useContext } from "react";
import { Card, Col, Button, Row } from "react-bootstrap";
import {CartContext} from '../Pages/CartContext';

const ProdukContext = () => {
  const { value, setValue } = useContext(CartContext);

  return (
    <div>
      <h2>Produk</h2>
      <hr />
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="../Assets/scanner.png" />
            <Card.Body>
              <Card.Title>Scanner</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary" onClick={() => setValue(value + 1)}>Tambah Keranjang</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="../Assets/scanner.png" />
            <Card.Body>
              <Card.Title>Scanner</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary" onClick={() => setValue(value + 1)}>Tambah Keranjang</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="../Assets/scanner.png" />
            <Card.Body>
              <Card.Title>Scanner</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary" onClick={() => setValue(value + 1)}>Tambah Keranjang</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProdukContext;
