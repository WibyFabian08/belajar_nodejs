import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

class Parent extends React.Component {
  state = {
    stock: 15,
    status: "Tersedia",
  };

  kurangiProduk = () => {
    if (this.state.stock >= 1) {
      this.setState({
        stock: this.state.stock - 1,
      });
    }

    if (this.state.stock < 1) {
      this.setState({
        status: "Habis",
      });
    }
  };

  tambahProduk = () => {
    this.setState({
      stock: this.state.stock + 1,
    });
  };

  render() {
    return (
      <div>
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
