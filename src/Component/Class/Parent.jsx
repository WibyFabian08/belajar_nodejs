import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import { Alert } from "reactstrap";


class Parent extends React.Component {
  state = {
    stock: 15,
    status: <Alert color="success">Stok Tersedia</Alert>,
  };

  kurangiProduk = () => {
    if (this.state.stock >= 1) {
      this.setState({
        stock: this.state.stock - 1,
      });
    }

    if (this.state.stock <= 1) {
      this.setState({
        status: <Alert color="danger">Stok Habis</Alert>,
      });
    } 
  };

  tambahProduk = () => {
    this.setState({
      stock: this.state.stock + 1,
    });

    if(this.state.stock >= 0) {
      this.setState({
        status: <Alert color="success">Stok Tersedia</Alert>,
      });
    }
  };

  render() {
    return (
      <div className='mt-5'>
        <hr/>
        <h3>Child Component</h3>
        <Child1
          stock={this.state.stock}
          kurangiProduk={this.kurangiProduk}
          tambahProduk={this.tambahProduk}
          status={this.state.status}
        ></Child1>
        <Child2 stock={this.state.stock} status={this.state.status}></Child2>
      </div>
    );
  }
}

export default Parent;
