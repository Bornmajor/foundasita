'use client';   // ✅ Add this at the top

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Wrap from '@/components/container/Wrap';
const MyNavbar = () => (
  <Wrap style={{
    paddingTop:"10px",
    paddingBottom:"10px"
  }}>
   <Navbar bg="light" expand="lg"  id="navbar">
      
      <Navbar.Brand href="#home">Foundasita</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="ms-auto">
          <Nav.Link href="#home">About us</Nav.Link>
          <Nav.Link href="#programs">Our programs</Nav.Link>
          <Nav.Link href="#our-work">Works</Nav.Link>
          <Nav.Link href="#our-work">Our team</Nav.Link>
           <Nav.Link href="#our-work">Get involved</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    
  </Navbar> 
  </Wrap>
  
);

export default MyNavbar;
