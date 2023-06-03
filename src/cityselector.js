//option to select city here

import React, {useState} from 'react'
import {Row, Col, FormControl, Button} from 'react-bootstrap'
 
const CitySelector = ({onSearch}) => {
    const [city, setCity] = useState("");

    return (
    <>
    <Row>
        <Col>
        <h1>Search your city</h1>
        </Col>
    </Row>

    <Row>
        <Col xs={4}> {/*xs={4} takes up one third of the page*/}
            <FormControl
            placeholder="Enter city"
            onChange={(e) => setCity(e.target.value)} //update city value with user input
            value={city} //value is the current selected city
            />
        </Col>
    </Row>

    <Row>
        <Col>
        <Button onClick={() => onSearch(city)}>Check Weather</Button>
        </Col>
    </Row>
    </>
    );
};

export default CitySelector;