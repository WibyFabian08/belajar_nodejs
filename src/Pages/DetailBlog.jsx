import React from "react";
import { Jumbotron, Button } from "reactstrap";
import { Link } from "react-router-dom";

class DetailBlog extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">{this.props.location.data.judul}</h1>
          <p>{this.props.location.data.tanggal}</p>
          <div className="text-center">{this.props.location.data.gambar}</div>
          <p className="lead mt-3">
            This is a simple hero unit, a simple Jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-2" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className="lead">
            <Button color="secondary" as={Link} to="/blog">
              Kembali
            </Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default DetailBlog;
