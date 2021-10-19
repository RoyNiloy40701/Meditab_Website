import React from 'react';
import { Col, ProgressBar, Row } from 'react-bootstrap';
import skillImg from '../../Images/image-2.png'
const Experience = () => {
     return (
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
     );
};

export default Experience;