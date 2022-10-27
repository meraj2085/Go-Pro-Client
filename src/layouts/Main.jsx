import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import LeftSideNav from "../components/LeftSideNav/LeftSideNav";

const Main = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="3" className="d-none d-lg-block">
            <LeftSideNav></LeftSideNav>
          </Col>
          <Col lg="9">
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;
