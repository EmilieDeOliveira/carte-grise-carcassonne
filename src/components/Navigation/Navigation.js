import React, { Component } from "react";
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './Navigation.css';
class Navigation extends Component {

  constructor(props){
    super(props);
  }

  render() {  
    return (
      <Navbar expand="lg" fixed="top">
        <Container>
        <Navbar.Brand href="/">NTST AUTO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='justify-content-end'>
          <Nav className="ml-auto pr-md-5">
            <Nav.Link href="/#services">Nos services</Nav.Link>
            <Nav.Link href="/Tarifs">Nos tarifs</Nav.Link>
            <Nav.Link href="/Documents">Documents</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }

}

export default Navigation;