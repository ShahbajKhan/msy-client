import React from 'react';
import { Button, Carousel, Col, Row } from 'react-bootstrap';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const Testimonial = () => {
    return (
        <div className='container'>
            <div className='fw-bold text-center'>
                <h5 style={{ color: '#41adb7' }}>TESTIMONIAL</h5>
                <h2 style={{ color: '#000473' }}>What's Clients Say About Us</h2>
            </div>
            <Row className='my-5'>
                
                <Col xs={11} sm={11} md={11}>
                    <Carousel>
                        <Carousel.Item>
                            <TestimonialCard></TestimonialCard>
                        </Carousel.Item>
                       
                    </Carousel>
                </Col>
            </Row>
        </div>
    );
};

export default Testimonial;