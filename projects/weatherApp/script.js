document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  const API_KEY = "835740411c55536fdbfa1496d10a8686";

  getWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    // may throw an error
    // server is always in another continent

    try {
      let weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }
  });

  async function fetchWeatherData(city) {
    // gets the data
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    // Use $ followed by {variable} to bind the templated string to a value
    console.log(URL);
    const response = await fetch(URL);

    console.log(typeof response);
    console.log(response);

    if (!response.ok) {
      throw new Error("city not found");
    }
    const data = await response.json();
    console.log(data);
    return data;
  }

  function displayWeatherData(data) {
    const { name, main, weather } = data;
    cityNameDisplay.textContent = name;

    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");

    temperatureDisplay.textContent = `Temperature: ${main.temp}`;
    descriptionDisplay.textContent = `Weather: ${weather[0].description}`;
  }

  function showError() {
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.remove("hidden");
  }
});
