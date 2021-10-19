
import React from 'react';
import { ButtonGroup, Col, Form, Row } from 'react-bootstrap';
import contactImg from '../../Images/de-illustration.png'


const Contact = () => {
     return (
          <div className="body">
               <div className=" container">
                    <Row>
                  
                         <Col xs={12} md={5} >

                              <h5 className="  text-info">Contact</h5>
                              <h2 > Get In Touch With Us</h2>
                              <Form>

                                   <Form.Group  >
                                        <Form.Label></Form.Label>
                                        <Form.Control type="text" placeholder="Your Name" />
                                   </Form.Group>
                                   <Form.Group  >
                                        <Form.Label></Form.Label>
                                        <Form.Control type="email" placeholder="Your Email" />
                                   </Form.Group>
                                   <Form.Group  >
                                        <Form.Label></Form.Label>
                                        <Form.Control type="text" placeholder="I would like to discuss" />
                                   </Form.Group>
                                   <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label></Form.Label>
                                        <Form.Control as="textarea" placeholder="Write comment" rows={3} />
                                   </Form.Group>

                                   <ButtonGroup variant="primary" className="btn btn-primary" type="submit">
                                    Send Message
                                   </ButtonGroup>
                              </Form>
                         </Col>
                         <Col xs={12} md={7}>
                              <img className="img-fluid  ps-5 mt-5" src={contactImg} width="" height="" alt=""></img>
                         </Col>
                        


                    </Row>
               </div>

          </div>
     );
};

export default Contact;