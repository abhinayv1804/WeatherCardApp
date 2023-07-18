import * as React from 'react';
import WeatherCard from './WeatherCard';

class Weather extends React.Component {
  
  render() {
    return(
      <div className='WeatherCard'>
       {this.props.forecast.map((model) =>
         <WeatherCard key={model.Day} {...model}/>
       )}
      </div>
    );
  }
}

export default Weather;