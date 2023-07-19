import * as React from 'react';
import WeatherImage from '../images/weather1.png';
import WeatherImage2 from '../images/weather2.jpg';

const weather1days = ["monday","wednesday","friday"];
const WeatherCard = (props) => {
  return (
    <div className="card">
      <img className='card__image' src={weather1days.includes(props.date.toLowerCase()) ? WeatherImage : WeatherImage2} title="loading"/>
      <h2 className="card__title">{props.temp}°C<br />{props.date}</h2>
      <div className='card__bottomBar'>
        <h2 className="card__day">{props.date}</h2>
        <h2 className="card__humid">{props.humidity}</h2>
      </div>
    </div>
  );
}
export default WeatherCard;

