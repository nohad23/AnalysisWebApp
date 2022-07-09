import React, {useState, useEffect} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../binbutton.css';




import {Button, Row, Col, Table, Dropdown} from 'react-bootstrap'



const ItemList = ({binValue, eventImageStart, eventImageEnd, resetVariables}) => {
    const [eventInfo, setEventInfo] = useState([]);
    const [item, setItem] = useState('');
    const [brand, setBrand] = useState('');
    const autofillItemList = ['plastic bottle', 'aluminium can', 'napkin', 'paper'];
    const autofillBrandList = ['coca cola', 'pepsi', 'tim hortons'];
  
  
    const addItem = () =>{
      if (item !== '' && binValue !== ''){
        const newEventIndo = eventInfo.concat({item: item, brand: brand, bin:binValue, start:eventImageStart, end:eventImageEnd})
        setEventInfo(newEventIndo)
        setItem('');
        setBrand('');
        resetVariables();
      }
    }
  
    const finishEvent = () => {
      if (eventImageStart !== '' && eventImageEnd !== '' && eventInfo.length > 0){
        setEventInfo([]);
      }
    }
  

  useEffect(()=> {
    console.log(eventInfo)
  },[eventInfo]);

  return (
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
            <Dropdown>
                <Dropdown.Toggle id='dropdown-basic'>
                  {'Item Quick Select'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {autofillItemList.map((itemA)=> (
                    <Row>
                      <Dropdown.Item
                      eventKey = {itemA}
                      onClick={(e) => setItem(itemA)}>
                        {itemA}
                      </Dropdown.Item>
                    </Row>
                  ))}
                </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown>
                <Dropdown.Toggle id='dropdown-basic'>
                  {'Brand Quick Select'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {autofillBrandList.map((brandA)=> (
                    <Row>
                      <Dropdown.Item
                      eventKey = {brandA}
                      onClick={(e) => setBrand(brandA)}>
                        {brandA}
                      </Dropdown.Item>
                    </Row>
                  ))}
                </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        <Row style={{marginTop: 15}}>
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

        <Row style={{marginTop: 15}}>
          <Button onClick={() => {setEventInfo([])}}>
            {'Clear Event'}
          </Button>
        </Row>
    </Col>
  );
}

export default ItemList;