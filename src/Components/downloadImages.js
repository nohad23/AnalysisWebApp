import React, {useState, useEffect} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../binbutton.css';


import {Container, Row, Col, Dropdown} from 'react-bootstrap'



const DownloadImages = () => {
  const clientList = 
    {'Client-1': {
      'client-1_device-1': ['2022-01-01', '2022-01-02', '2022-01-03'],
      'client-1_device-2': ['2022-01-04', '2022-01-05', '2022-01-06'],
      'client-1_device-3': ['2022-01-07', '2022-01-08', '2022-01-09'],
      'client-1_device-4': ['2022-01-10', '2022-01-11', '2022-01-12']
    }, 
    'Client-2': {
      'client-2_device-1': ['2022-02-01', '2022-02-02', '2022-02-03'],
      'client-2_device-2': ['2022-02-04', '2022-02-05', '2022-02-06'],
      'client-2_device-3': ['2022-02-07', '2022-02-08', '2022-02-09'],
      'client-2_device-4': ['2022-02-10', '2022-02-11', '2022-02-12']
    }, 
    'Client-3': {
      'client-3_device-1': ['2022-03-01', '2022-03-02', '2022-03-03'],
      'client-3_device-2': ['2022-03-04', '2022-03-05', '2022-03-06'],
      'client-3_device-3': ['2022-03-07', '2022-03-08', '2022-03-09'],
      'client-3_device-4': ['2022-03-10', '2022-03-11', '2022-03-12']
    }};

  const [clientSelected, setClientSelected] = useState('Client');
  const [deviceSelected, setDeviceSelected] = useState('Device');
  const [dateSelected, setDateSelected] = useState('Date');
  const [deviceList, setDeviceList] = useState([]);
  const [dateList, setDateList] = useState([]);

  const updateDeviceList = (x) => {
    if (dateSelected !== 'Date' || deviceSelected !== 'Device'){
      setDateSelected('Date');
      setDeviceSelected('Device'); 
    };
    setClientSelected(x);
    const listA = clientList[x];
    setDeviceList(listA);
  }

  const updateDateList = (x) => {
    if (dateSelected !== 'Date'){
      setDateSelected('Date');
    };
    setDeviceSelected(x);
    const listB = deviceList[x];
    setDateList(listB);
  }

  useEffect(()=> {
    console.log(clientSelected, deviceSelected, dateSelected)
  },[clientSelected, deviceSelected, dateSelected]);

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
                {Object.keys(clientList).map((client)=> (
                  <Row>
                    <Dropdown.Item
                    eventKey = {client}
                    onClick={(e) => updateDeviceList(client)}>
                      {client}
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
                {Object.keys(deviceList).map((device)=> (
                  <Row>
                    <Dropdown.Item
                    eventKey = {device}
                    onClick={(e) => updateDateList(device)}>
                      {device}
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
                {dateList.map((date)=> (
                  <Row>
                    <Dropdown.Item
                    eventKey = {date}
                    onClick={(e) => setDateSelected(date)}>
                      {date}
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
