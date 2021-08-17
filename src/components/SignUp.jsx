import React from "react";
import "./css/signup.css";
import { Row, Col, Container, Figure, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  /* let history = useHistory(); */
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [emailErr, setEmailErr] = useState(null);
  const [passwordErr, setPasswordErr] = useState(null);
  const [allEntry, setAllEntry] = useState([]);

  const formHandler = (e) =>{
    e.preventDefault();

    let verifiedEmail = null;
      let emailRegix = /^[a-z0-9*!_]{1,}@[a-z]{1,}[.]{1}[a-z]{2,6}$/;
      if(emailRegix.test(data.email)){
        verifiedEmail = data.email;
        console.log("Email yes")
      } else{
        setEmailErr("Emaiil is invalid")
      };

    if(data.password === data.confirmPassword){
      console.log("Password yes");
    } else{
      setPasswordErr("Pssword does not match");
    }

    if(verifiedEmail === data.email && data.password === data.confirmPassword){
      const newEntry = {
        userUsername: data.username,
        userEmail: verifiedEmail,
        userPassword: data.password,
        userConfirmPassword: data.confirmPassword,
      };
      setAllEntry([...allEntry, newEntry]);
      alert("Signup Successfull");
    } else{
      console.log("Fill the form again");
    }
        

      
  };

  console.log(allEntry);

  // const formHandler = (e) => {
  //   e.preventDefault();

  //   let verifiedEmail = null;
  //   if (data.email == /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) {
  //     console.log("email yes");
  //     verifiedEmail = data.email;
  //   } else {
  //     setEmailErr("Email is not valid!");
  //   }

  //   if (verifiedEmail != null && data.password === data.confirmPassword) {
  //     const newEntry = {
  //       userUsername: data.username,
  //       userEmail: verifiedEmail,
  //       userPassword: data.password,
  //       userConfirmPassword: data.confirmPassword,
  //     };
  //     console.log("password yes");
  //     setAllEntry([...allEntry, newEntry]);
  //     alert("Signup Successfull");
  //   }
  //    else setPasswordErr("Password does not match");
  // };
  // console.log(allEntry);

  // for (let i = 0; i < allEntry.length; i++) {
  //   console.log(allEntry[i].userEmail);
  // }

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
                  <Form.Control
                    type="username"
                    value={data.username}
                    name="username"
                    onChange={(e) =>
                      setData({ ...data, [e.target.name]: e.target.value })
                    }
                    autoComplete="off"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email or Phone number</Form.Label>
                  <Form.Control
                    type="email"
                    value={data.email}
                    name="email"
                    onChange={(e) =>
                      setData({ ...data, [e.target.name]: e.target.value })
                    }
                    autoComplete="off"
                    required
                  />
                  {emailErr ? (<div className="text-danger"> {emailErr} </div>) : null}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={data.password}
                    name="password"
                    onChange={(e) =>
                      setData({ ...data, [e.target.name]: e.target.value })
                    }
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicConfirmPassword"
                >
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={data.confirmPassword}
                    name="confirmPassword"
                    onChange={(e) =>
                      setData({ ...data, [e.target.name]: e.target.value })
                    }
                    required
                  />
                  {passwordErr ? (<div className="text-danger"> {passwordErr} </div>) : null}
                </Form.Group>

                <div className="d-grid gap-2 login-button my-4">
                  <button className="btn btn-secondary my-3" type="submit">
                    Sign Up
                  </button>
                  <Link to="/login" style={{ textDecoration: "none" }}>
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
