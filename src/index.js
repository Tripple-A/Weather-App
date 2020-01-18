import './index.css';

const giphy = require('giphy-api')('1ciWQ3R3BbnLWyjnSWHUIKmeC1TMV1wH');

let newValue;
const temp = document.getElementById('temp');
const deg = document.getElementById('degrees');
const btn = document.querySelector('button');
const btn2 = document.getElementById('farcel');

async function find(search) {
  try {
    const response = await giphy.search(search);
    document.querySelector('img').src = response.data[0].images.original.url;
    return response.data[0].images.original.url;
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
  document.querySelector('img').src = find(desc);
  const { country } = data.sys;
  const town = data.name;
  deg.textContent = 'C';
  btn2.textContent = 'Convert to Farenheit';
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


function farenheit() {
  newValue = temp.textContent;
  newValue = Math.round((parseFloat(newValue, 10) - 32) * (5 / 9));
  return newValue;
}

function celcius() {
  newValue = temp.textContent;
  newValue = Math.round((parseFloat(newValue, 10) * 9) / 5 + 32);
  return newValue;
}


function convert() {
  if (btn2.textContent.includes('Celcius')) {
    temp.textContent = farenheit();
    deg.textContent = 'C';
    btn2.textContent = 'Convert to Farenheit';
  } else {
    temp.textContent = celcius();
    deg.textContent = 'F';
    btn2.textContent = 'Convert to Celcius';
  }
  return newValue;
}

btn.addEventListener('click', () => {
  findWeather(locationUrl());
});

btn2.addEventListener('click', () => {
  convert();
});