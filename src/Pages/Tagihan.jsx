import React, { useContext } from "react";
import { Jumbotron, Button } from 'react-bootstrap';
import { keranjangContext } from '../App';

const Tagihan = () => {

    const countContext = useContext(keranjangContext)

  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Pembayaran</h1>
        <p className="lead">
          Pembelian Barang Sejumlah <strong>{countContext.keranjangState.jumlah}</strong> buah di toko kami
        </p>
        <hr className="my-2" />
        <p>
          Total Bayar Rp. {countContext.keranjangState.hargaTotal}
        </p>
        <p className="lead">
          <Button color="primary">Lanjutkan Pembayaran</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Tagihan;
