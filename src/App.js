import './App.css';
import Weather from './Weather.js';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import React,{useState} from 'react';

const sampleData = [
    {
      "cityName": "Delhi",
      "forecast": [
          {
        "Day": "Monday",
        "temp": 33,
        "humidity": 76
      },
      {
          "Day": "Tuesday",
          "temp": 34,
          "humidity": 76
      },
      {
        "Day": "Wednesday",
        "temp": 34,
        "humidity": 76
    
    },{
      "Day": "Thursday",
      "temp": 34,
      "humidity": 76
  
  },{
    "Day": "Friday",
    "temp": 34,
    "humidity": 76
},
    ]
    },
    {
      "cityName": "Mumbai",
      "forecast": [
          {
        "Day": "Monday",
        "temp": 44,
        "humidity": 76
      },
      {
          "Day": "Tuesday",
          "temp": 46,
          "humidity": 76
      }
    ]
    }
];


// const sampleData = {
//   "forecast": [
//       {
//     "Day": "Monday",
//     "temp": 23,
//     "humidity": 76
//   },
//   {
//       "Day": "Tuesday",
//       "temp": 28,
//       "humidity": 76
//   }
// ]
// };

function App() {
  const options = sampleData.map(x=>x.cityName);
  const defaultOption = options[0];

  const [weatherData,setWeatherData] = useState(sampleData[0]);

  const _onSelect = (event,child) => {
     const option = sampleData.filter(x=>x.cityName === event.value)[0];
     setWeatherData(option);
  };

  return (
    [<Dropdown options={options} onChange={_onSelect} value={defaultOption} placeholder="Select an option" />
    ,<Weather {...weatherData}/>,<h1 style={{textAlign:'center'}}>{weatherData.cityName}</h1>]
  );
}

export default App;
