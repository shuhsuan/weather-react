import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import CitySelector from './cityselector';
import {Container} from 'react-bootstrap'
import UseFetch from './usefetch';
import {API_KEY, API_ENDPOINT} from './config';
import WeatherList from './weatherlist';

const App = () => {

  const {data, error, isLoading, setUrl} = UseFetch();
  const nowdate = new Date()

  //error handling and loading
  const getContent = () => {
    if(error) return <h2>Error when fetching: {error}</h2>
    if(!data && isLoading) return <h2>LOADING...</h2>
    if(!data) return null;
    console.log(nowdate);
    console.log(data);
    return <WeatherList weathers={data.list} />
  }

  return (
    <>
    <Container className="App">

      <CitySelector onSearch={(city) => setUrl(`${API_ENDPOINT}/data/2.5/forecast?q=${city}&cnt=1&appid=${API_KEY}&units=metric`)} />

      {getContent()}

    </Container>
    </>
  );
}

export default App;
