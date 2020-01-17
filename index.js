async function findWeather() {
  try {
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=7c933702219e1d26960b3cc11edb864c', { mode: 'cors' });
    const responseData = await response.json();
    console.log(responseData);
  } catch (err) {
    console.log(err);
  }
}