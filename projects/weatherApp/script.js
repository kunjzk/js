const apiKey = "835740411c55536fdbfa1496d10a8686";
let baseURL =
  "http://api.openweathermap.org/geo/1.0/direct?q=londo&limit=1&appid=";
fetch(baseURL + apiKey)
  .then((response) => response.json())
  .then((json) => console.log(json));
