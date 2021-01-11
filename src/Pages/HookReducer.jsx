import React, { useReducer } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { CustomInput } from "reactstrap";

const initialState = 0;

const reducer = (state, action) => {
    switch(action) {
        case 'tambah': return state + 1
        case 'kurang': return state - 1
        default: return state

    }
}


const HooksReducer = () => {
    
    const [count, dispatch] = useReducer(reducer, initialState);
    
    function tambah() {
        dispatch('tambah');
    }

    function kurang() {
        if(count >= 1) {
            dispatch('kurang');
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
          <p>Rp. 150.000</p>
          <p>Jumlah</p>
          <Row clasName="d-flex justify-content-center">
            <Col>
              <Button variant="danger" onClick={() => kurang()}> - </Button>
            </Col>
            <Col>
              <p>{count}</p>
            </Col>
            <Col>
              <Button variant="primary" onClick={() => tambah()}> + </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default HooksReducer;
