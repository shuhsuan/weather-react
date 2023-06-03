import React from 'react'
import {Col, Row} from 'react-bootstrap'
import WeatherCard from './weathercard'

const WeatherList = ({weathers}) => { //weather prop to pass from App.js
    return(
        <Row xs={5}>
            {weathers.map(({dt, main, weather}) => (
                <Col key={dt}>
                    <WeatherCard //pass weathercard props here
                    temp_max={main.temp_max}
                    temp_min={main.temp_min}
                    dt={dt*1000}
                    main={weather[0].main}
                    icon={weather[0].icon}
                    />
                </Col>
            ))}
        </Row>
    )
}

export default WeatherList;