import React from 'react';
import {carouselData} from '../imageCarousel'

import {Row, Col, Carousel} from 'react-bootstrap'


const CreateCarousel = ({imageIndex}) => {
    return(
        <Row style={{width: 640, marginRight: 15}}>
            <Col>
                <Carousel indicators={false} interval={null} controls={false}>
                    {carouselData.map((image, i) =>(
                    <Carousel.Item>
                        {/* <h1>{carouselData[imageIndex].value}</h1> */}
                        <img
                        src={carouselData[imageIndex].value}
                        />
                    </Carousel.Item>
                    ))}
                </Carousel>
            </Col>
        </Row>
    )}

export default CreateCarousel;




