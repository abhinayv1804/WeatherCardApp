import * as React from 'react';
import WeatherCard from './WeatherCard';
import Loader from './Loader';

const Weather = (props) => {
  
  const weatherCards = props.forecast != undefined ? props.forecast.map((model) =>
    <WeatherCard key={model.date} {...model}/>
  ) : <Loader style={{width:'100%',height:'100%'}}/>;

  return(
      <div className='WeatherCard'>
       {weatherCards}   
      </div>
  );
}

export default Weather;