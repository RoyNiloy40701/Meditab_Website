import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Doctor.css'
const Doctor = (props) => {
     const { name,img,department,camber} =props.doctor;
     return (
          <Col>
               <Card className="h-100" >
                    <Card.Img variant="top" src={img} />
                    <Card.Body className="background-color text-center  text-light">
                       
                         <Card.Title>{name}</Card.Title>
                         <p>{department}</p>

                    <button className="btn btn-success" type="disable">{camber}</button>
                    </Card.Body>
               </Card>
          </Col>
     );
};

export default Doctor;