import React, { useEffect, useState } from 'react';
import { CardGroup, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
     const [doctors, setDoctors] = useState([]);

     useEffect(() => {
          fetch('./doctors.json')
               .then(res => res.json())
               .then(data => setDoctors(data))

     }, []);
     return (
          <div className="body">
          <div className="container mb-5 ">
               <div className=" mb-3 pt-5">
                    <h2>Head of Department</h2>
               </div>
               <CardGroup>
                    <Row xs={1} md={4} className="g-4">{
                        doctors.map(doctor => <Doctor doctor={doctor} key={doctor.name}></Doctor>)

                    }
                    </Row>
               </CardGroup>
          </div>
          </div>
     );
};

export default Doctors;
