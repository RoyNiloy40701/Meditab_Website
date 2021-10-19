import React from 'react';
import { Col, ProgressBar, Row } from 'react-bootstrap';
import welImg from '../../Images/image-1.png'

import skillImg from '../../Images/image-2.png'
const About = () => {
     return (
    
          <div className="body">
               <div className=" container">
                    <Row >
                         <Col xs={12} md={5}>
                              <img className="img-fluid" src={welImg} width="380" height="" alt=""></img>

                         </Col>
                         <Col xs={12} md={7} className="mt-5 pt-5" >
                              <h2 className="text-primary"> Welcome to Meditab take our services with best offer</h2>
                              <p className="my-3 pe-3">Meditab Hospital Chattogram is the first-ever 470-bed multi-disciplinary super-specialty, tertiary care hospital in Chattogram. It features 24/7 Emergency Department, state of the art ICUs and 27 specialties and subspecialties filling capacity gaps in the region. The hospital spans 492,000 sq ft and Equipped with the latest technology and more than 500 best in class medical professionals, the Evercare Hospital Chattogram will provide quality, accessible healthcare to improve patient outcomes for communities in, and around.</p>

                              <h5 className="mt-4">20+ Services </h5>
                              <p className="mb-3 pe-3"> You can take one of these popular services in under our hospital</p>


                              <h5 className="mt-4">Lifetime Member </h5>
                              <p className="mb-3 pe-3"> You can lifetime member under our hospital</p>
                         </Col>
                    </Row>
               </div>
               <div className=" my-5 container">
                    <Row >
                    <Col xs={12} md={5} >
                              <img className="img-fluid" src={skillImg} width="380" height="" alt=""></img>
                         </Col>
                         <Col xs={12} md={7} className="mt-5 pt-5" >
                              <h2 > Inspiring Stories And Skills</h2>
                              <h2 className="my-3  text-primary">We have 25 Years of Experience</h2>
                              <div>
                              Medical Private <ProgressBar variant="primary" now={80} label={`${80}%`} /><br />
                              Patients Served  <ProgressBar variant="primary" now={90} label={`${90}%`} /><br />
                              Satisfied Patients <ProgressBar variant="primary" now={85} label={`${85}%`} />
                              </div>
                         </Col>
                    </Row>
               </div>
          </div>
     );
};

export default About;