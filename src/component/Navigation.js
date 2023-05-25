import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { LinkContainer } from 'react-router-bootstrap';

export default function Navigation() {

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand href="#">Book Store</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <LinkContainer to="/home">
                <Nav.Link href="#action1">Home</Nav.Link>
              </LinkContainer>

              {/* <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link */}
              {/* </Nav.Link> */}
            </Nav>
            <Form className="d-flex">
              {/* <Form.Control
              type="button"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> */}

              <LinkContainer to="/login">
                <Button variant="outline-success">Login </Button>
              </LinkContainer>

              <LinkContainer to="/Register">
                <Button variant="outline-success"> Register</Button>
              </LinkContainer >

              <LinkContainer to="/cart">
                <Button variant="outline-success">Cart</Button>
              </LinkContainer>

            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
