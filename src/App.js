import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/binbutton.css';
import DownloadImages from './Components/downloadImages';
import CreateCarousel from './Components/carousel';
import ItemList from './Components/itemList';
import BinButtons from './Components/binButtons';
import NavigationButtons from './Components/navigationButtons';
import EventButtons from './Components/eventButtons';


import {Container, Row, Col, Accordion} from 'react-bootstrap'




const App = () => {
  const [binValue, setBinValue] = useState('');
  const [imageIndex, setImageIndex] = useState(0);
  const [eventImageStart, setEventImageStart] = useState('');
  const [eventImageEnd, setEventImageEnd] = useState('');

  const resetVariables = () => {
    setBinValue('');
    setEventImageStart('');
    setEventImageEnd('');
  }


  useEffect(()=> {
    console.log(eventImageStart, eventImageEnd, binValue)
  },[binValue]);

  return (
    <div className="App">
      <Container>

        <Row style={{marginTop:25}}>

          <Accordion defaultActiveKey='0'>
            <Accordion.Item eventKey = '0'>
              <Accordion.Header>
                Download and Load Images
              </Accordion.Header>
              <Accordion.Body>
                <DownloadImages/>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

        </Row>

        <Row style={{marginTop:25}}>

          <Col style={{width:700}}>
            <Accordion defaultActiveKey='0'>
              <Accordion.Item eventKey = '0'>
                <Accordion.Header>
                  Analysis
                </Accordion.Header>
                <Accordion.Body>
                  <CreateCarousel
                  imageIndex={imageIndex}
                  />
                  <BinButtons
                  binValueSetter={setBinValue}
                  />
                  <Row>
                    <Col>
                      <NavigationButtons
                      imageIndex = {imageIndex}
                      imageIndexSetter = {setImageIndex}
                      />
                    </Col>
                    <Col>
                      <EventButtons
                      imageIndex = {imageIndex}
                      eventImageStartSetter = {setEventImageStart}
                      eventImageEndSetter = {setEventImageEnd}
                      resetImageVariablesSetter = {resetVariables}
                      />
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>

          <Col style={{width:300}}>
            <Accordion defaultActiveKey='0'>
              <Accordion.Item eventKey = '0'>
                <Accordion.Header>
                  Event Item List
                </Accordion.Header>
                <Accordion.Body>
                  <ItemList
                  binValue={binValue}
                  eventImageStart={eventImageStart}
                  eventImageEnd={eventImageEnd}
                  resetVariables={resetVariables}

                  />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default App;
