import './index.css';
import { celcius, farenheit } from './temp';

const giphy = require('giphy-api')('1ciWQ3R3BbnLWyjnSWHUIKmeC1TMV1wH');

const temp = document.getElementById('temp');
const deg = document.getElementById('degrees');
const btn = document.getElementById('check');
const btn2 = document.getElementById('far');
const btn3 = document.getElementById('cel');
const input = document.querySelector('input');
const progress = document.querySelector('.lds-roller');

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
  assign('temp', Math.round(parseFloat(temp) - 273.15));
  assign('desc', desc);
  assign('country', country);
  assign('town', town);
  progress.style.display = 'none';
}

function show() {
  document.querySelector('.display').style.display = 'none';
  document.getElementById('date').style.display = 'block';
  progress.style.display = 'none';
}

async function findWeather(url) {
  let responseData;
  try {
    const response = await fetch(url, { mode: 'cors' });
    responseData = await response.json();
    get(responseData);
  } catch (err) {
    assign('date', 'We could not find the weather for your specified location');
    show();
  }
  return responseData;
}

const locationUrl = function getUrl() {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${input.value}&APPID=7c933702219e1d26960b3cc11edb864c`;
  return url;
};

btn.addEventListener('click', () => {
  findWeather(locationUrl());
  input.value = '';
  progress.style.display = 'block';
});

btn2.addEventListener('click', () => {
  if (deg.textContent === 'C') {
    temp.textContent = farenheit(temp.textContent);
    deg.textContent = 'F';
  }
});

btn3.addEventListener('click', () => {
  if (deg.textContent === 'F') {
    temp.textContent = celcius(temp.textContent);
    deg.textContent = 'C';
  }
});