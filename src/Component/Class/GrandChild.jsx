import React from "react";

class GrandChild extends React.Component {
  render() {
    return (
      <div>
        <h2>GrandChild</h2>
        <p>Stok {this.props.stock}</p>
      </div>
    );
  }
}

export default GrandChild;
