const giphy = require('giphy-api')('1ciWQ3R3BbnLWyjnSWHUIKmeC1TMV1wH');

async function find(search) {
  try {
    const response = await giphy.search(search);
    return response.data[2].images.original.url;
  } catch (err) {
    return err;
  }
}

async function findWeather(url) {
  let responseData;
  let weather;
  try {
    const response = await fetch(url, { mode: 'cors' });
    responseData = await response.json();
    const { temp } = responseData.main;
    const { description } = responseData.weather[0];
    const { country } = responseData.sys;
    const { name } = responseData;
    const { feels_like } = responseData.main;
    const { pressure } = responseData.main;
    const { humidity } = responseData.main;

    weather = {
      temp, description, country, name, feels_like, pressure, humidity,
    };
  } catch (err) {
    return '204';
  }
  return weather;
}

export { findWeather, find };