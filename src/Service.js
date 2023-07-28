import axios from "axios";
const url = "https://api.weatherapi.com/v1/forecast.json?days=10&key=59f7319ca73c40d99d8113739231907"
const getWeatherDataFromAPI = (city) => 
     axios
     .get(url+"&q="+city)
  .then(response => {
    const forecast =  response.data.forecast.forecastday;
    if(forecast != undefined) {
      const objects = forecast.map(cast => {
        return {'date':cast.date,'temp':cast.day.avgtemp_c,'humidity':cast.day.avghumidity,'icon':cast.day.condition.icon}
      });
      return objects;
    }
  })
  .catch(error => {
    if (error.response && error.response.status === 404) {
      return `\u2014`;
    }
  });

const cities = ["Bangalore","Kota","Delhi","California"];
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

export {getWeatherDataFromAPI,cities};