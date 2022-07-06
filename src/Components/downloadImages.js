import React, {useState, useEffect} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../binbutton.css';


import {Container, Row, Col, Dropdown} from 'react-bootstrap'



const DownloadImages = () => {
  const clientList = [{Name: 'Client-1'}, {Name: 'Client-2'}, {Name: 'Client-3'}, {Name: 'Client-4'}];
  const [clientSelected, setClientSelected] = useState('Client');
  const [deviceSelected, setDeviceSelected] = useState('Device');
  const [dateSelected, setDateSelected] = useState('Date');
  const deviceList = [{}]
  const dateList = [{}]

  useEffect(()=> {
    console.log(clientSelected)
  },[clientSelected]);

  return (
    <div className="App">
      <Container>
        <Row>
          {/* Dropdown for Client selection */}
          <Col>
            <Dropdown>
              <Dropdown.Toggle id='dropdown-basic' style = {{width:150}}>
                {clientSelected}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {clientList.map((client, i)=> (
                  <Row>
                    <Dropdown.Item
                    eventKey = {client.Name}
                    onClick={(e) => setClientSelected(client.Name)}>
                      {client.Name}
                    </Dropdown.Item>
                  </Row>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          {/* Dropdown for Device selection */}
          <Col>
            <Dropdown>
              <Dropdown.Toggle id='dropdown-basic' style = {{width:150}}>
                {deviceSelected}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {deviceList.map((device, i)=> (
                  <Row>
                    <Dropdown.Item
                    eventKey = {device.Name}
                    onClick={(e) => setDeviceSelected(device.Name)}>
                      {device.Name}
                    </Dropdown.Item>
                  </Row>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          {/* Dropdown for Date selection */}
          <Col>
            <Dropdown>
              <Dropdown.Toggle id='dropdown-basic' style = {{width:150}}>
                {dateSelected}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {dateList.map((date, i)=> (
                  <Row>
                    <Dropdown.Item
                    eventKey = {date.Name}
                    onClick={(e) => setDateSelected(date.Name)}>
                      {date.Name}
                    </Dropdown.Item>
                  </Row>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DownloadImages;
