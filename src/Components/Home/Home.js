import React from 'react';
import { Col, Row } from 'react-bootstrap';
import banner from '../../Images/image-1.png';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
     return (
          <div className="body">
               <div className="cover-img">
                    <div className="container">
                         <Row className="top-banner ">
                              <Col xs={12} md={7} className=" topBanner-heading pe-5 ">
                                   <h1>We Provide Total Health Care Solution</h1>
                                   <button className=" btn ">Learn More</button>
                              </Col>
                              <Col xs={12} md={5} className="mt-3  mx-auto">
                                   <img className="img-fluid topBanner-img ms-4 " src={banner} alt=""></img>
                              </Col>
                         </Row>
                    </div>
               </div>

               <Services></Services>

               <Contact></Contact>
               <Experience></Experience>

          </div>
     );
};

export default Home;