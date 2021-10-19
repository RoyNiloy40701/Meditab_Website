import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../Images/logo-2.png';
import './Footer.css';
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BsFillTelephoneForwardFill } from "react-icons/bs";

const Footer = () => {
     return (
          <div className="footer py-5">

               <div className="container">
                    <Row  >
                         <Col xs={6} md={3}>
                              <img src={logo} width="150" height="" alt=""></img>
                              <p className="mt-2 pe-3" >Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you  and best choice for your family healthcare.</p>
                         </Col>
                         <Col xs={6} md={3} >
                              <h5 className="ms-3">Department</h5>
                              <Nav.Link as={NavLink} to="/">Pediatric</Nav.Link>
                              <Nav.Link as={NavLink} to="/">Cardiology</Nav.Link>
                              <Nav.Link as={NavLink} to="/">X-ray & CT Scan</Nav.Link>
                              <Nav.Link as={NavLink} to="/">Neurology</Nav.Link>
                         </Col>
                         <Col xs={6} md={3}>
                              <h5 className="ms-3">Help & Support</h5>
                              <Nav.Link as={NavLink} to="/">Documentation</Nav.Link>
                              <Nav.Link as={NavLink} to="/">Live Chat</Nav.Link>
                              <Nav.Link as={NavLink} to="/">Privacy</Nav.Link>
                              <Nav.Link as={NavLink} to="/">Faqs</Nav.Link>
                         </Col>
                         <Col xs={6} md={3}>
                              <h5 className="ms-3" >Contact Us</h5>
                              <Nav.Link ><GoLocation></GoLocation>PO Box 16122 Collins Street West Victoria 8007 Australia</Nav.Link>
                              <Nav.Link><BsFillTelephoneForwardFill></BsFillTelephoneForwardFill> +91 458 654 528</Nav.Link>
                              <Nav.Link as={NavLink} to="/"><AiOutlineMail></AiOutlineMail> meditab@gmail.com</Nav.Link>
                         </Col>
                    </Row>
               </div>


          </div>
     );
};

export default Footer;