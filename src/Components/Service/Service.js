import React from 'react';
import { Card, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
     const { name,img,categories,desc,id} =props.service;
     return (
          <Col>
               <Card className="h-100" >
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                         <p><span className="custom-categories rounded ">{categories}</span></p>
                         <Card.Title>{name}</Card.Title>
                         <p>{desc.slice(0,130)}</p>
                    <Link to={`/details/${id}`}>
                         <button className="btn btn-primary" type="submit">Read  More</button>
                         </Link>
                    </Card.Body>
               </Card>
          </Col>
     );
};

export default Service;