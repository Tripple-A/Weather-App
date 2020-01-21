let newValue;

const celcius = (num) => {
  newValue = Math.round((parseFloat(num, 10) - 32) * (5 / 9));
  return newValue;
};

const farenheit = (num) => {
  newValue = Math.round((parseFloat(num, 10) * 9) / 5 + 32);
  return newValue;
};

export { farenheit, celcius };