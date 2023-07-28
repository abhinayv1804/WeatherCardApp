import './App.css';
import Weather from './components/Weather.js';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import React,{useState,useEffect} from 'react';
import {getWeatherDataFromAPI,cities} from './Service.js';

function App() {
  const options = cities;
  const defaultOption = options[0];

  const [weatherData,setWeatherData] = useState(undefined);
  const [selectedCity,setSelectedCity] = useState(defaultOption);

  const _onSelect = (event) =>{
      getWeatherData(event.value);
  };

  const getWeatherData = (city) => {
    setWeatherData(undefined);
    getWeatherDataFromAPI(city).then(objects => {
        setWeatherData(objects ? {'forecast':objects} : undefined);
        setSelectedCity(city);
    });
  };

  useEffect(() => {
    getWeatherData(defaultOption);
  },[]);

  return (
    [<Dropdown options={options} onChange={_onSelect} value={defaultOption} placeholder="Select an option" />
    ,<Weather {...weatherData}/>,<h1 style={{textAlign:'center'}}>{selectedCity}</h1>]
  );
}

export default App;
