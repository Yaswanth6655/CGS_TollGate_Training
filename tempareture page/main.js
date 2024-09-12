function convertTemp() {
    let temp = parseFloat(document.getElementById('tempInput').value);
    let unit = document.getElementById('unitInput').value;

    let celsius, fahrenheit, kelvin;

    if (isNaN(temp)) {
      alert("Please enter a valid number.");
      return;
    }

    if (unit === 'celsius') {
      celsius = temp;
      fahrenheit = (temp * 9/5) + 32;
      kelvin = temp + 273.15;
    } else if (unit === 'fahrenheit') {
      celsius = (temp - 32) * 5/9;
      fahrenheit = temp;
      kelvin = (temp - 32) * 5/9 + 273.15;
    } else if (unit === 'kelvin') {
      celsius = temp - 273.15;
      fahrenheit = (temp - 273.15) * 9/5 + 32;
      kelvin = temp;
    }

    document.getElementById('celsiusResult').textContent = 'Celsius: ' + celsius.toFixed(2);
    document.getElementById('fahrenheitResult').textContent = 'Fahrenheit: ' + fahrenheit.toFixed(2);
    document.getElementById('kelvinResult').textContent = 'Kelvin: ' + kelvin.toFixed(2);
  }