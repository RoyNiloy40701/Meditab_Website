import React from 'react';
import { Card, Col } from 'react-bootstrap';


const Management = (props) => {
     const { name,img,desc} =props.management;
     return (
          <Col>
               <Card className="h-100" >
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                         <Card.Title>{name}</Card.Title>
                         <p>{desc}</p>
                   
                         <button className="btn btn-primary" type="submit">Read  More</button>
                      
                    </Card.Body>
               </Card>
          </Col>
     );
};

export default Management;