async function find(search) {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=1ciWQ3R3BbnLWyjnSWHUIKmeC1TMV1wH&s='${search}`, { mode: 'cors' });
    const responseData = await response.json();
    document.querySelector('img').src = (responseData.data.images.original.url);
    return responseData;
  } catch (err) {
    return err;
  }
}

function assign(a, b) {
  document.getElementById(a).textContent = b;
  document.querySelector('.display').style.display = 'block';
  document.getElementById('date').style.display = 'none';
}

function get(data) {
  const { temp } = data.main;
  const desc = data.weather[0].description;
  find(desc);
  const { country } = data.sys;
  const town = data.name;
  assign('temp', Math.round(parseFloat(temp) - 273.15));
  assign('desc', desc);
  assign('country', country);
  assign('town', town);
}

async function findWeather(url) {
  let responseData;
  try {
    const response = await fetch(url, { mode: 'cors' });
    responseData = await response.json();
    get(responseData);
  } catch (err) {
    assign('date', 'We could not find the weather for your specified location');
    document.querySelector('.display').style.display = 'none';
    document.getElementById('date').style.display = 'block';
  }
  return responseData;
}

const locationUrl = function getUrl() {
  const input = document.querySelector('input');
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${input.value}&APPID=7c933702219e1d26960b3cc11edb864c`;
  input.value = '';
  return url;
};

const btn2 = document.getElementById('farcel');
let newValue;

function convert(num) {
  if (btn2.textContent.includes('Celcius')) {
    btn2.textContent = 'Convert to Farenheit';
    newValue = (parseFloat(num, 10) - 32) * (5 / 9);
    document.getElementById('temp').textContent = Math.round(newValue);
    document.getElementById('degrees').textContent = 'C';
  } else {
    btn2.textContent = 'Convert to Celcius';
    newValue = document.getElementById('temp').textContent;
    document.getElementById('temp').textContent = Math.round((parseInt(newValue, 10) * 9) / 5 + 32);
    document.getElementById('degrees').textContent = 'F';
  }
  return newValue;
}

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  findWeather(locationUrl());
});

btn2.addEventListener('click', () => {
  convert(document.getElementById('temp').textContent);
});