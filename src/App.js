import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/binbutton.css';
import DownloadImages from './Components/downloadImages';
import CreateCarousel from './Components/carousel';


import {Container, Row, Col, Button, Table, Accordion} from 'react-bootstrap'




const App = () => {
  const [binValue, setBinValue] = useState('');
  const [eventImageStart, setEventImageStart] = useState('');
  const [eventImageEnd, setEventImageEnd] = useState('');
  const [eventInfo, setEventInfo] = useState([]);
  const [item, setItem] = useState('');
  const [brand, setBrand] = useState('');


  const addItem = () =>{
    if (item !== '' && binValue !== ''){
      const newEventIndo = eventInfo.concat({item: item, brand: brand})
      setEventInfo(newEventIndo)
      setItem('');
      setBrand('');
      setBinValue('');
    }
  }

  const finishEvent = () => {
    if (eventImageStart !== '' && eventImageEnd !== '' && eventInfo.length > 0){
      setEventImageStart('');
      setEventImageEnd('');
      setEventInfo([]);
      setItem('');
      setBrand('');
      setBinValue('');
    }
  }

  useEffect(()=> {
    // console.log(eventImageStart, 'Event Start');
    // console.log(eventImageEnd, 'Event End');
  },[eventInfo]);

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
                  <Col>
                    <CreateCarousel/>
                  </Col>
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
                <Col>
                  <Row>
                    <Table class='table'>
                      <thead>
                        <tr>
                          <th scope='col'>Item</th>
                          <th scope='col'>Brand</th>
                        </tr>
                      </thead>
                      <tbody>
                        {eventInfo.map((itemInfo) => (
                          <tr>
                            <th scope='col'>{itemInfo.item}</th>
                            <th scope='col'>{itemInfo.brand}</th>
                          </tr>
                        ))}
                        <tr>
                          <th scope='col'>
                            <form>
                              <input
                              value = {item}
                              onChange = {e=> setItem(e.target.value)}
                              placeholder = {'Item'}
                              >
                              </input>
                            </form>
                          </th>
                          <th scope='col'>
                            <form>
                              <input
                              value = {brand}
                              onChange = {e=> setBrand(e.target.value)}
                              placeholder = {'Brand'}
                              >
                              </input>
                            </form>
                          </th>
                        </tr>
                      </tbody>
                    </Table>
                  </Row>
                  <Row>
                    <Col>
                      <Button onClick={addItem}>
                        Add Item
                      </Button>
                    </Col>
                    <Col>
                      <Button onClick={finishEvent}>
                        Finish Event
                      </Button>
                    </Col>
                  </Row>
                </Col>
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
