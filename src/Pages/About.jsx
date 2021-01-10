import React from "react";
import NavbarComp from "../Component/Functional/NavbarComp";
import { Container, Row, Button, Col, Image } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaGithub, FaSchool, FaLandmark, FaWhmcs } from "react-icons/fa";

class About extends React.Component {
  render() {
    return (
      <Container className="text-center">
        <div className="body mt-3 bg-light">
          <h1>Hello There</h1>
          <Image className="shadow" src="../Assets/me.png" roundedCircle />
          <p className="mt-3 text-secondary">
            Hello friends, my name is Wiby Fabian Rianto, I am a student from
            Sekolah Tinggi Teknologi Garut, and this is my first website
            project, I realize that the website I have created is far from
            perfect, I hope this website can be created motivates me to continue
            to make better work and of course be useful for people around me.
          </p>
          <Button
            variant="outline-secondary"
            href="https://www.instagram.com/wiby_fabian/?hl=id"
          >
            More
          </Button>
        </div>
        <div className="footer mt-3 bg-light">
          <Row>
            <Col>
              <h4>Contact Me</h4>
              <h6 className="text-secondary">
                <FaFacebookF /> Wiby Fabianrianto
              </h6>
              <h6 className="text-secondary">
                <FaInstagram /> wiby_fabian
              </h6>
              <h6 className="text-secondary">
                <FaGithub /> WibyFabian08
              </h6>
            </Col>
            <Col>
              <h4>Experience</h4>
              <h6 className="text-secondary"><FaLandmark/> Drafter</h6>
              <h6 className="text-secondary"><FaWhmcs/> Field Crew</h6>
            </Col>
            <Col>
              <h4>Educational Background</h4>
              <h6 className="text-secondary"><FaSchool/> SD Bayongbong 2</h6>
              <h6 className="text-secondary"><FaSchool/> Smp 1 Bayongbong</h6>
              <h6 className="text-secondary"><FaSchool/> Smk 9 Garut</h6>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default About;
