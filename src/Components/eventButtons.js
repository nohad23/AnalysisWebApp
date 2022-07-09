import React from 'react';
import {carouselData} from '../imageCarousel'


import {Row,Button} from 'react-bootstrap'


const EventButtons = ({imageIndex, eventImageStartSetter, eventImageEndSetter}) => {


    return(
        <Row>
            {/*Event Start & End image button*/}
            <Button style={{marginRight: 5}} className = 'scrollButtonsLeft' onClick={() =>{eventImageStartSetter(carouselData[imageIndex].value)}}>
                Start Event
            </Button>
            <Button style={{marginLeft: 5}} className = 'scrollButtonsRight' onClick={() =>{eventImageEndSetter(carouselData[imageIndex].value)}}>
                End Event
            </Button>
        </Row>
    )}

export default EventButtons;




