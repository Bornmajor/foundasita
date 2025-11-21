'use client';   // ✅ Add this at the top

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Wrap from '@/components/container/Wrap';
import Image from "next/image";
import styles from './MyNavbar.module.css'
import {REGISTRATION_LINK }from "@/constants/url"
import CustomButton from "@/components/button/CustomButton"
/**
 * 
 * @returns 
 */
const MyNavbar = () => (
  <Wrap style={{
    paddingTop:"10px",
    paddingBottom:"10px"
  }}>
   <Navbar bg="light" expand="lg"  id="navbar" fixed="top">
      
      <Navbar.Brand href="#home" >
        <div className={styles.logoContainer}>
        <Image 
        src="/images/app_logo.png"
        alt='App logo'
        width={55}
        height={50}
        />
        <p className={styles.appName}> Fundasita </p>  
        </div>
        
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="ms-auto">
          <Nav.Link href="#aboutus">About us</Nav.Link>
          <Nav.Link href="#ourprograms">Our programs</Nav.Link>
          <Nav.Link href="#works">Our Impact</Nav.Link>
          <Nav.Link href="#ourteam">Our team</Nav.Link>
          <Nav.Link href="#footer">Contact us</Nav.Link>
           <Nav.Link href={REGISTRATION_LINK} className={styles.joinUsLink}>Join us</Nav.Link>
           <CustomButton textButton='Join us'  href={REGISTRATION_LINK}  style={styles.customNavbarBtn}/>

           {/* <Nav.Link href="#our-work">Get involved</Nav.Link> */}

        </Nav>
      </Navbar.Collapse>
    
  </Navbar> 
  </Wrap>
  
);

export default MyNavbar;
