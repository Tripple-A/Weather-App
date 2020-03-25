async function ip() {
  try {
    const response = await fetch('https://ipfind.co/?ip=105.112.70.208&auth=f5ac562a-c9a7-4985-b964-bbc444515f2d', { mode: 'cors' });
    const responseData = await response.json();
    return (responseData);
  } catch (err) {
    return err;
  }
}

async function find(search) {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=1ciWQ3R3BbnLWyjnSWHUIKmeC1TMV1wH&s=${search}`, { mode: 'cors' });
    const res = await response.json();
    return res.data.images.original.url;
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

export { findWeather, find, ip };