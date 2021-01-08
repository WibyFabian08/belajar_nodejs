import React from "react";
import "./CSS/Produk.css";

class Produk extends React.Component {
  state = {
    stock: this.props.stock,
    sub: "beli",
    status: "Tersedia",
    disabled: false,
  };

  buttonBeli = () => {
    if (this.state.stock >= 1) {
      this.setState({
        stock: this.state.stock - 1,
      });
    }

    if (this.state.stock == 0) {
      this.setState({
        status: "Habis",
        disabled: true,
      });
    }
  };

  render() {
    return (
      <div className="box-stock">
        <h2>{this.props.nama}</h2>
        <img src="https://placeimg.com/640/480/arch" alt="" />
        <div className="keterangan">
          <p>
            Harga <strong>Rp. {this.props.harga}</strong>
          </p>
          <p>Stock {this.state.stock}</p>
          <button
            className="btn-click"
            onClick={() => this.buttonBeli()}
            disabled={this.state.disabled}
          >
            Beli
          </button>
          <p>Status {this.state.status}</p>
        </div>
      </div>
    );
  }
}

export default Produk;
