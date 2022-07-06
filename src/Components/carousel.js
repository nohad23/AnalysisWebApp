import React, {useState, useEffect} from 'react';
import {carouselData} from '../imageCarousel'


import {Row, Col, Button, Carousel} from 'react-bootstrap'


const CreateCarousel = () => {
    const bins = [{Name: 'Landfill'}, {Name: 'Compost'}, {Name:'Paper'}, {Name: 'Recycling'}];
    const [binValue, setBinValue] = useState('');
    const [eventImageStart, setEventImageStart] = useState('');
    const [eventImageEnd, setEventImageEnd] = useState('');
    const [currentImage, setCurrentImage] = useState(carouselData[0].value);
    const [imageIndex, setImageIndex] = useState(0);


    const binButtonClick = (x) =>{
        console.log(x);
        setBinValue(x);
      };

    useEffect(()=> {
        setCurrentImage(carouselData[imageIndex].value);
        // console.log(eventImageStart, 'Event Start');
        // console.log(eventImageEnd, 'Event End');
        // console.log('current image:', currentImage, 'image index:', imageIndex)
    },[eventImageStart, eventImageEnd, imageIndex, binValue]);



    return(
        <div>
            <Col>
                <Row style={{width: 640, marginRight: 15}}>
                    <Col>
                        <Carousel indicators={false} interval={null} controls={false}>
                            {carouselData.map((image, i) =>(
                            <Carousel.Item>
                                {/* <h1>{carouselData[imageIndex].value}</h1> */}
                                <img
                                src={currentImage}
                                />
                            </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                </Row>
                <Row style={{marginTop: 15, marginBottom: 15}}>
                    {/* Bin button creation */}
                    {bins.map((bin, i) => (
                        <Col>
                            <Button style={{width: 125}} onClick={() =>binButtonClick(bin.Name)}>
                                {bin.Name}
                            </Button>
                        </Col>
                    ))}
                </Row>
                <Row>
                    {/*Navigation and Event Buttons*/}
                    <Col>
                        {/*Next & Previous image button*/}
                        <Row>
                            <Button style={{marginRight: 5}} className = 'scrollButtonsLeft' onClick={() =>{if (imageIndex -1 >= 0){setImageIndex(imageIndex-1)}}}>
                                Previous Image
                            </Button>
                            <Button style={{marginLeft: 5}} className = 'scrollButtonsRight' onClick={() =>{if (imageIndex +1 < carouselData.length){setImageIndex(imageIndex+1)}}}>
                                Next Image
                            </Button>
                        </Row>
                    </Col>
                    <Col>
                        {/*Event Start & End image button*/}
                        <Row>
                            <Button style={{marginRight: 5}} className = 'scrollButtonsLeft' onClick={() =>{setEventImageStart(carouselData[imageIndex].value)}}>
                                Start Event
                            </Button>
                            <Button style={{marginLeft: 5}} className = 'scrollButtonsRight' onClick={() =>{setEventImageEnd(carouselData[imageIndex].value)}}>
                                End Event
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </div>
    )}

export default CreateCarousel;




