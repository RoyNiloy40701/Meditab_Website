import React, { useEffect, useState } from 'react';
import { CardGroup, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
     const [services, setServices] = useState([]);

     useEffect(() => {
          fetch('./Services.JSON')
               .then(res => res.json())
               .then(data => setServices(data))

     }, []);
     
     return (
          <div className="body">
          <div className="container services mb-5 ">
               <div className=" mb-3 services-heading d-flex justify-content-between">
                    <h2>Medical Services</h2>
                    <button className="btn">View All</button>
               </div>
               <CardGroup>
                    <Row xs={1} md={3} className="g-4">{
                         services.map(service => <Service service={service} key={service.name}></Service>)
                    }
                    </Row>
               </CardGroup>
          </div>
          </div>
     );
};

export default Services;