import React, { useReducer } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

const initialState = {
    jumlah: 1,
    hargaSatuan: 10000,
    hargaTotal: 10000
}

const reducer = (state, action) => {
    switch(action. type) {
        case 'tambah': return {
            ...state,
            jumlah: state.jumlah + 1,
            hargaTotal: state.hargaSatuan + (state.jumlah * state.hargaSatuan)
        }
        case 'kurang': return {
            ...state,
            jumlah: state.jumlah - 1,
            hargaTotal: (state.jumlah * state.hargaSatuan) - state.hargaSatuan
        }
        default: return state
    }
}


const HooksReducer = () => {
    
    const [count, dispatch] = useReducer(reducer, initialState);
    
    function tambah() {
        dispatch({type: 'tambah'});
    }

    function kurang() {
        if(count.jumlah >= 1) {
            dispatch({type: 'kurang'});
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
          <p>Rp. {count.hargaSatuan}</p>
          <p>Jumlah</p>
          <Row clasName="d-flex justify-content-center">
            <Col>
              <Button variant="danger" onClick={() => kurang()}> - </Button>
            </Col>
            <Col>
              <p>{count.jumlah}</p>
            </Col>
            <Col>
              <Button variant="primary" onClick={() => tambah()}> + </Button>
            </Col>
          </Row>
          <Button className='mt-3' variant='success'>Total Harga Rp. {count.hargaTotal}</Button>
        </Col>
      </Row>
    </div>
  );
};

export default HooksReducer;
