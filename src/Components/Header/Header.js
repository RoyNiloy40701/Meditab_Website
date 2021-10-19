import React from 'react';
import logo from '../../logo.png'
import { Container, Nav, Navbar ,Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import useAuth from '../../Hooks/useAuth';

const Header = () => {
     const {user,logOut}=useAuth();
     return (
          <div>
               <Navbar bg="light" expand="lg">
                    <Container>
                         <Navbar>
                              <Container>
                                   <Nav.Link as={NavLink} to="/home">
                                        <img alt="" src={logo} width="130" height="45" className="d-inline-block align-top me-5" />{' '}
                                   </Nav.Link>
                              </Container>
                         </Navbar>
                         <Navbar.Toggle aria-controls="basic-navbar-nav" />
                         <Navbar.Collapse id="basic-navbar-nav">
                              <Nav className="me-auto ms-5">
                                   <Nav.Link as={NavLink} className="mx-3" to="/home">Home</Nav.Link>
                                   <Nav.Link as={NavLink} className="mx-3" to="/services">Services</Nav.Link>
                                   <Nav.Link as={NavLink} className="mx-3" to="/doctors">Doctors</Nav.Link>
                                   <Nav.Link as={NavLink} className="mx-3" to="/about">About</Nav.Link>

                              </Nav>
                              {
                                   user.email && <p className="ms-auto me-3 my-auto">Welcome, {user.displayName}</p>
                              }
                              {
                                   user.email ?

                                        <Button onClick={logOut} className="px-3 py-2 btn-primary me-2">Logout</Button>
                                        :
                                        <NavLink to="/login"><Button className="px-3 py-2 btn-primary me-2">Login</Button></NavLink>
                              }


                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </div>
     );
};

export default Header;