import React from "react";
import { Jumbotron, Container } from "reactstrap";
import "./header.css";
import {Row, Col } from 'reactstrap';
// import "../../styles.css";
// This is the header for all pages except the Home page!

const Header = (props) => {
  return (
    <div>
<<<<<<< HEAD
      <Jumbotron fluid className="mainbkg">
        <Container>
        <Row>
          <Col xs="6" className="">
          <img className="header-img header-right" src="https://i.imgur.com/EQBHicX.png " alt="podium-guy" />
          </Col>
          <Col xs="6">
          <h1 className="header-style">TossUp!</h1>
          <p className="lead"></p>

          </Col>
      </Row>

=======
      <Jumbotron fluid>
        <Container fluid className="mainbkg">
          <h1 className="display-3" color="white">Welcome to TossUp!</h1>
          <p className="lead">This is a p tag</p>
>>>>>>> 5c12cbf1f80127ff36e4165d339f9cc93ca002ef
        </Container>
      </Jumbotron>
      </div>
    )};

export default Header;
