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
  input.value = '';
  return url;
};

function assign(a, b) {
  document.getElementById(a).textContent = b;
  document.querySelector('.display').style.display = 'block'
}

function get(data) {
  console.log(data);
  const temp = data.main.temp;
  const desc = data.weather[0].description;
  const country = data.sys.country;
  const town = data.name;
  assign('temp', temp);
  assign('desc', desc);
  assign('country', country);
  assign('town', town);
}

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  findWeather(locationUrl());
});
