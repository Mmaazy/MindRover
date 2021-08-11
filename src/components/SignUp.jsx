import React from "react";
import "./css/signup.css";
import { Row, Col, Container, Figure, Form} from "react-bootstrap";
import {Link} from 'react-router-dom';

const SignUp = () => {
  return (
    <>
      <div className="signup-main">
        <Container>
          <Row>
            <Col className="d-flex align-items-center" xl={6} lg={7} md={12}>
               
              <Figure>
                <Figure.Image
                  //width={171}
                  //height={180}
                  alt="171x180"
                  src="./images/signup.png"
                />
              </Figure>
            </Col>

            <Col xl={5} lg={5} md={12}>
              <Form className="signup-form">
                <h4 className="mt-2 mb-4">Sign Up</h4>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email or Phone number</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="confirmpassword" />
                </Form.Group>

                <div className="d-grid gap-2 login-button my-4">
                  <button className="btn btn-secondary my-3" type="button">
                    Sign Up
                  </button>
                    <Link to="/login">
                    <div className="d-grid gap-2 login-button my-2">
                  <button className="btn btn-secondary" type="button">
                    Login
                  </button>
                  </div>
                  </Link>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SignUp;
