import './index.css';
import './rolling.css';
import { farenheit } from './temp';
import { findWeather, find } from './logic';


const deg = document.getElementById('degrees');
const btn = document.getElementById('check');
const btn2 = document.getElementById('far');
const input = document.querySelector('input');
const progress = document.querySelector('.lds-roller');


const assign = (a, b) => {
  document.getElementById(a).textContent = b;
  document.querySelector('.display').style.display = 'block';
  document.getElementById('date').style.display = 'none';
};

const show = () => {
  document.querySelector('.display').style.display = 'none';
  document.getElementById('date').style.display = 'block';
  progress.style.display = 'none';
};

const unshow = () => {
  progress.style.display = 'block';
};


const get = (data) => {
  if (data === '204') { show(); } else {
    assign('desc', data.description);
    assign('country', data.country);
    assign('town', data.name);
    progress.style.display = 'none';
  }
};

const locationUrl = () => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${input.value}&APPID=7c933702219e1d26960b3cc11edb864c`;
  return url;
};


async function check1() {
  const data = await findWeather(locationUrl());
  const url = await find(data.description);
  const temp = Math.round(parseFloat(data.temp) - 273.15);
  assign('temp', temp);
  document.querySelector('img').src = url;
  get(data);
}

async function check2() {
  const data = await findWeather(locationUrl());
  const url = await find(data.description);
  const temp = Math.round(parseFloat(data.temp) - 273.15);
  assign('temp', farenheit(temp));
  document.querySelector('img').src = url;
  get(data);
}

btn.addEventListener('click', () => {
  check1();
  deg.textContent = 'C';
  unshow();
});

btn2.addEventListener('click', () => {
  check2();
  deg.textContent = 'F';
  unshow();
});
