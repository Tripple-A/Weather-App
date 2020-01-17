async function findWeather(url) {
  try {
    const response = await fetch(url, { mode: 'cors' });
    const responseData = await response.json();
    get(responseData)
    return responseData;
  } catch (err) {
    console.log('We could not find the weather for your specified location');
  }
}

const locationUrl = function getUrl() {
  const input = document.querySelector('input');
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${input.value}&APPID=7c933702219e1d26960b3cc11edb864c`;
  return url;
};

function get(data) {
  console.log(data)
  const temp = data.main.temp;
  const desc = data.weather.description;
  const country = data.sys.country;
  const town = data.name
}

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  findWeather(locationUrl());
});
