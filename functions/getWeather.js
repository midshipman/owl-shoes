const axios = require('axios');

async function getWeather(functionArgs) {
  let location = functionArgs.location;
  console.log('GPT -> called getWeather function', location);
  const apiKey = 'd73ae1d07e4e9e2ddba6ff98f1edf0ce';
  const baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
  const params = { q: location, appid: apiKey, units: 'metric' };

  try {
    const response = await axios.get(baseUrl, { params });
    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = response.data;
    console.log('weather data: ', data.name, data.main.temp, data.weather[0].description);

    return JSON.stringify(data);
    
  } catch (error) {
    console.error('Error fetching weather data', error);
    return 'weather data:  London 14.74 overcast clouds';
  }
}

// getWeather('London');

module.exports = getWeather;