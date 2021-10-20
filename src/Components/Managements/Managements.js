import React, { useEffect, useState } from 'react';
import {  CardGroup,  Row } from 'react-bootstrap';
import Management from '../Management/Management';



const Managements = () => {
     const [managements, setManagements] = useState([]);

     useEffect(() => {
          fetch('./management.json')
               .then(res => res.json())
               .then(data => setManagements(data))

     }, []);
     
     return (
          <div className="body">
          <div className="container">
               <div className=" mb-4 services-heading text-center">
                    <h2>Management of Meditab</h2>
                 
               </div>
               <CardGroup>
                    <Row xs={1} md={4} className="g-4">{
                         managements.map(management => <Management  management={management} key={management.name}></Management>)
                    }
                    </Row>
               </CardGroup>
          </div>
          </div>
     );
};

export default Managements;