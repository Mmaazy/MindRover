import React from "react";
import "./css/signup.css";
import { Row, Col, Container, Figure, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import {useState} from 'react';

const SignUp = () => {

  let history = useHistory();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  
  const [allEntry, setAllEntry] = useState([]);
 

  
 
 const formHandler = (e) =>{
   e.preventDefault();
 
   alert("Signup Successfull")
  //  history.push("/login");
 
   const newEntry = {
     userUsername: data.username,
     userEmail: data.email,
     userPassword: data.password,
     userConfirmPassword: data.confirmPassword
   };
   setAllEntry([...allEntry, newEntry]);
 };
 console.log(allEntry);

  return (
    <>
      <div className="signup-main">
        <Container>
          <Row>
            <Col className="d-flex align-items-center" xl={6} lg={7} md={12}>
              <Figure className="signup-picture">
                <Figure.Image alt="171x180" src="./images/signup.png" />
              </Figure>
            </Col>

            <Col xl={5} lg={5} md={12}>

              <Form className="signup-form" onSubmit={formHandler}>
                <h4 className="mt-2 mb-4">Sign Up</h4>
                <Form.Group className="mb-3" controlId="formUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="username" value={data.username} name="username" onChange={(e)=>setData({...data, [e.target.name]: e.target.value})} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email or Phone number</Form.Label>
                  <Form.Control type="email" value={data.email} name="email" onChange={(e)=>setData({...data, [e.target.name]: e.target.value})} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" value={data.password} name="password" onChange={(e)=>setData({...data, [e.target.name]: e.target.value})} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" value={data.confirmPassword} name="confirmPassword" onChange={(e)=>setData({...data, [e.target.name]: e.target.value})} required />
                </Form.Group>

                <div className="d-grid gap-2 login-button my-4">
                  <button className="btn btn-secondary my-3" type="submit">
                    Sign Up
                  </button>
                  <Link to="/login" style={{textDecoration:'none'}}>
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
