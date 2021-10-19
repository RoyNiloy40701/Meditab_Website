import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const ShowDetails = () => {
     const {serviceId}=useParams();
    const [services,setServices]=useState([]);

     useEffect(()=>{
          fetch('https://royniloy40701.github.io/hostmeditab/Services.JSON')
          .then(res => res.json())
          .then(result=> setServices(result))
          },[serviceId])

     
     const service=services.find(srvsDetails =>parseInt(serviceId)===srvsDetails.id);

     return (
          <div className=" my-5 container">
             
                       {
                          service &&
                          <Row >
                             <Col xs={12} md={6} >
                              <img className="img-fluid" src={service.img} width="" height="" alt=""></img>
                         </Col>
                         <Col xs={12} md={6} className="" >
                           
                              <h2 className="my-3 text-primary">{service.name}</h2>
                              <p>{service.desc}</p>
                            
                         </Col>
                         </Row>
                       }  
                         
                         
                         
                  
               </div>
     );
};

export default ShowDetails;