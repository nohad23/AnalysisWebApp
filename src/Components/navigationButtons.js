import React from 'react';
import {carouselData} from '../imageCarousel'

import {Row,Button} from 'react-bootstrap'


const NavigationButtons = ({imageIndex, imageIndexSetter}) => {

    return(
        <Row>
            {/*Next & Previous image button*/}
            <Button style={{marginRight: 5}} className = 'scrollButtonsLeft' onClick={() =>{if (imageIndex -1 >= 0){imageIndexSetter(imageIndex-1)}}}>
                Previous Image
            </Button>
            <Button style={{marginLeft: 5}} className = 'scrollButtonsRight' onClick={() =>{if (imageIndex +1 < carouselData.length){imageIndexSetter(imageIndex+1)}}}>
                Next Image
            </Button>
        </Row>
    )}

export default NavigationButtons;




