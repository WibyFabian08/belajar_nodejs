import React from "react";
import "./CSS/Produk.css";

class Child1 extends React.Component {
  render() {
    return (
      <div className="box-stock">
        <h2>Child1</h2>
        <h2>Scanner Hp Pavillion</h2>
        <img src="../../Assets/scanner.png" alt="" />
        <div className="keterangan">
          <p>
            <strong>Harga Rp. 1.000.000 </strong>
          </p>
          <p>Stock : {this.props.stock} </p>
          <button className="btn-click" onClick={() => this.props.kurangiProduk()}>
            Kurangi
          </button>
          <button style={{marginLeft: '5px'}} className="btn-click" onClick={() => this.props.tambahProduk()}>
            Tambah
          </button>
          <p>Status {this.props.status} </p>
        </div>
      </div>
    );
  }
}

export default Child1;
