import './index.css';
import './rolling.css';
import { farenheit } from './temp';
import { findWeather, find, ip } from './logic';


const deg = document.querySelector('.degrees');
const btn = document.getElementById('check');
const btn2 = document.getElementById('far');
const input = document.querySelector('input');
const progress = document.querySelector('.lds-roller');


const assign = (a, b) => {
  document.getElementById(a).textContent = b;
};

const show = () => {
  document.querySelector('.display').style.display = 'none';
  document.getElementById('date').style.display = 'block';
  document.getElementById('today-info').style.display = 'none';
  progress.style.display = 'none';
};

const unshow = () => {
  progress.style.display = 'block';
};


const get = (data) => {
  if (data === '204') { show(); } else {
    document.getElementById('date').style.display = 'none';
    input.value = '';
    document.getElementById('today-info').style.display = 'flex';
    document.querySelector('.display').style.display = 'block';
    assign('country', data.country);
    assign('town', data.name);
    assign('desc', data.description.replace(/^\w/, (c) => c.toUpperCase()));
    assign('pressure', data.pressure);
    assign('humidity', data.humidity);
    progress.style.display = 'none';
  }
};

const locationUrl = (url) => {
  const url2 = `https://api.openweathermap.org/data/2.5/weather?q=${url}&APPID=7c933702219e1d26960b3cc11edb864c`;
  return url2;
};


async function check1(url3) {
  const data = await findWeather(locationUrl(url3));
  const url = await find(data.description);
  const temp = Math.round(parseFloat(data.temp) - 273.15);
  const temp2 = Math.round(parseFloat(data.feels_like) - 273.15);
  assign('temp', temp);
  assign('feelslike', temp2);
  document.querySelector('.bg').src = url;
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
  deg.textContent = 'F';
  document.querySelector('.bg').src = url;
  get(data);
}

btn.addEventListener('click', () => {
  !input.value? check1(document.getElementById('town').textContent) : check1(input.value) ;
  deg.textContent = 'C';
  document.querySelector('#deg').textContent = 'C';
  unshow();
});

btn2.addEventListener('click', () => {
  !input.value? check2(document.getElementById('town').textContent) : check2(input.value) ;
  deg.textContent = 'F';
  document.querySelector('#deg').textContent = 'F';
  unshow();
});

async function now() {
  const city = await ip();
  check1(city);
}

now();
document.getElementById('today').textContent = new Date().toDateString();
document.querySelector('#deg').textContent = 'C';