const express = require('express');

const getWeatherForecast = require('./get-weather-forecast');

const PORT_NUMBER = 8080;
const app = express();

app.get('/get-weather/:year/:month/:day', (req, res) => {
  const { year, month, day } = req.params;

  const yearNumber = parseInt(year, 10);
  const monthNumber = parseInt(month, 10);
  const dayNumber = parseInt(day, 10);

  res.send(getWeatherForecast(yearNumber, monthNumber, dayNumber));
});

app.listen(PORT_NUMBER, () => {
  console.info(`Server listening on port ${PORT_NUMBER}`);
});
