import React from 'react';


import {Row, Col, Button} from 'react-bootstrap'


const BinButtons = ({binValueSetter}) => {
    const bins = [{Name: 'Landfill'}, {Name: 'Compost'}, {Name:'Paper'}, {Name: 'Recycling'}];

    return(
        <Row style={{marginTop: 15, marginBottom: 15}}>
            {/* Bin button creation */}
            {bins.map((bin, i) => (
                <Col>
                    <Button style={{width: 125}} onClick={() =>{binValueSetter(bin.Name)}}>
                        {bin.Name}
                    </Button>
                </Col>
            ))}
        </Row>

    )}

export default BinButtons;




