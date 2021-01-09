import React from "react";
import "./CSS/Produk.css";
import GrandChild from "./GrandChild";

class Child2 extends React.Component {
  render() {
    return (
      <div className="box-stock">
        <h2>Child2</h2>
        <h2>Stock Scanner Hp Pavillion</h2>
        <img src="../../Assets/scanner.png" alt="" />
        <div className="keterangan">
          <p>
            <strong>Harga Rp. 1.000.000 </strong>
          </p>
          <p>Stock : {this.props.stock} </p>
          <p>Status {this.props.status} </p>
          <GrandChild stock={this.props.stock}></GrandChild>
        </div>
      </div>
    );
  }
}

export default Child2;
