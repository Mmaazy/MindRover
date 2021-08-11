import React from "react";
import { Row, Col, Container, Figure, Form } from "react-bootstrap";
import "./css/login.css";
import { Link } from "react-router-dom";

const Login = (props) => {
    const headerChange = () =>{

    };
  return (
    <div className="main">
      <Container>
        <Row>
          <Col xl={6} lg={7} md={12}>
            <Figure>
              <Figure.Image
                //width={171}
                //height={180}
                alt="171x180"
                src="./images/login2.png"
              />
            </Figure>
          </Col>

          <Col xl={5} lg={5} md={12}>
            <Form className="login-form">
              <h4>Login</h4>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email or Phone number</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <div className="d-flex justify-content-between">
                  <Form.Label>Password</Form.Label>
                  <Form.Label>Forgot Password</Form.Label>
                </div>
                <Form.Control type="password" />
              </Form.Group>
              <Link to="/postlogin">
              <div className="d-grid gap-2 login-button">
                <button onClick={headerChange} className="btn btn-secondary" type="button">
                  Login
                </button>
              </div>
              </Link>

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

                <Link to="/signup">
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
