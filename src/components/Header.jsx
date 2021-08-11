import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import {Link/* , BrowserRouter, Switch, Route */} from 'react-router-dom';
/* import Login from './Login';
import SignUp from './SignUp';
import PostLogin from './PostLogin'; */

const Header = (props) => {
   // const [postLoginHeader, setPostLoginHeader] = useState(false);
  return (
    <>
{/*     {postLoginHeader? ( <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">1</Nav.Link>
              <Nav.Link as={Link} to="/signup">2</Nav.Link>
              <Nav.Link as={Link} to="/login">3</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      ) : (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      )
    } */}

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

{/* <BrowserRouter>
      <Header/>
    
      <Switch>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={SignUp}/>
      <Route exact path="/postlogin" component={PostLogin}/>
      </Switch>
      </BrowserRouter> */}

    </>
  );
};

export default Header;
