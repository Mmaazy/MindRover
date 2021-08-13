import React from "react";
import { Row, Col, Container, Figure, Form } from "react-bootstrap";
import "./css/login.css";
import { Link } from "react-router-dom";
//import {useState} from 'react';

const Login = () => {


  return (
    <div className="main">
      <Container>
        <Row>
          <Col xl={6} lg={7} md={12} sm={0}>
            <Figure className="login-picture">
              <Figure.Image alt="171x180" src="./images/login2.png" />
            </Figure>
          </Col>

          <Col xl={5} lg={5} md={12} sm={12}>

            <Form className="login-form" >
              <h4>Login</h4>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email or Phone number</Form.Label>
                <Form.Control type="email" autoComplete="off" />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <div className="d-flex justify-content-between">
                  <Form.Label>Password</Form.Label>
                  <Form.Label>Forgot Password</Form.Label>
                </div>
                <Form.Control type="password" autoComplete="off" />
              </Form.Group>

         <Link to="/postlogin" style={{textDecoration:'none'}}>
                <div className="d-grid gap-2 login-button" >
                  <button className="btn btn-secondary" type="submit" >
                    Login
                  </button>
                </div>
              </Link> 

            {/*   <div className="d-grid gap-2 login-button" >
                  <button className="btn btn-secondary" type="submit" >
                    Login
                  </button>
                </div> */}

              <div className="my-5 text-center">
                <Row>
                  <Col>
                    <hr />
                  </Col>
                  <Col>
                    <h5>What new?</h5>
                  </Col>
                  <Col>
                    <hr />
                  </Col>
                </Row>

                <Link to="/signup" style={{textDecoration:'none'}}>
                  <div className="d-grid gap-2 login-button my-5">
                    <button className="btn btn-secondary" type="button">
                      Sign Up
                    </button>
                  </div>
                </Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;


