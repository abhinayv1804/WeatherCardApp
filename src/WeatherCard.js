import * as React from 'react';
import WeatherImage from './weather1.png';
import WeatherImage2 from './weather2.jpg';

// const sampleImage = "https://picsum.photos/100/200";
const weather1days = ["monday","wednesday","friday"];
class WeatherCard extends React.Component {
    render() {
        return (
          <div className="card">
            <img className='card__image' src={weather1days.includes(this.props.Day.toLowerCase()) ? WeatherImage : WeatherImage2} title="loading"/>
            <h2 className="card__title">{this.props.temp}°C<br />{this.props.Day}</h2>
            <div className='card__bottomBar'>
              <h2 className="card__day">{this.props.Day}</h2>
              <h2 className="card__humid">{this.props.humidity}</h2>
            </div>
          </div>
        );
    }
}
export default WeatherCard;

