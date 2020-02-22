import './index.css';
import './rolling.css';
import { farenheit } from './temp';
import { findWeather, find } from './logic';


const deg = document.querySelector('.degrees');
const btn = document.getElementById('check');
const btn2 = document.getElementById('far');
const input = document.querySelector('input');
const progress = document.querySelector('.lds-roller');


const assign = (a, b) => {
  document.getElementById(a).textContent = b;
  document.querySelector('.display').style.display = 'block';
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
    assign('pressure', data.pressure);
    assign('humidity', data.humidity);
    progress.style.display = 'none';
  }
};

const locationUrl = (url) => {
  const url2 = `http://api.openweathermap.org/data/2.5/weather?q=${url}&APPID=7c933702219e1d26960b3cc11edb864c`;
  return url2;
};


async function check1(url3) {
  const data = await findWeather(locationUrl(url3));
  const url = await find(data.description);
  const temp = Math.round(parseFloat(data.temp) - 273.15);
  const temp2 = Math.round(parseFloat(data.feels_like) - 273.15);
  assign('temp', temp);
  assign('feelslike', temp2);
  document.querySelector('img').src = url;
  deg.textContent = 'C';
  get(data);
}

async function check2(url3) {
  const data = await findWeather(locationUrl(url3));
  const url = await find(data.description);
  const temp = Math.round(parseFloat(data.temp) - 273.15);
  const temp2 = Math.round(parseFloat(data.feels_like) - 273.15);
  assign('temp', farenheit(temp));
  assign('feelslike', farenheit(temp2));
  document.querySelector('img').src = url;
  deg.textContent = 'F';
  get(data);
}

btn.addEventListener('click', () => {
  check1(input.value);
  deg.textContent = 'C';
  document.querySelector('#deg').textContent = 'C';
  unshow();
});

btn2.addEventListener('click', () => {
  check2(input.value);
  document.querySelector('#deg').textContent = 'F';
  unshow();
});

check1('vancouver');
input.value = 'vancouver';
deg.textContent = 'C';
document.querySelector('#deg').textContent = 'C';
