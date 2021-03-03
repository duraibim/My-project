
function showWeather(response) {
    let h1 = document.querySelector("h1");
    let h3 = document.querySelector("h3");
    let temperature = Math.round(response.data.main.temp);
    h1.innerHTML = `${response.data.name}`;
    h3.innerHTML = `${temperature}`;
  
    document.querySelector("#humidity").innerHTML = ` Humidity : ${response.data.main.humidity} %`;
    let wind = Math.round(
      response.data.wind.speed);
      document.querySelector("#wind").innerHTML = ` Wind : ${wind} Km/h `;
      document.querySelector("#condition").innerHTML = response.data.weather[0].main;
  
  
  }
  
  ////// SEARCH BUTTON ////////
  
  function search_(city) {
    let apiKey = "0196dac33373aaa2798921754f07b116";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
  }
  
  function search(event) {
    event.preventDefault();
    let city = document.querySelector("#city-input").value;
    search_(city);
  }
  
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", search);
  
  ////// CURRENT BUTTON ///////
  
  function currentLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "0196dac33373aaa2798921754f07b116";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  
    axios.get(url).then(showWeather);
  }
  
  function getCurrentLocation(event){
    event.preventDefault();
  navigator.geolocation.getCurrentPosition(currentLocation);
  }
  
  
  let currentButton = document.querySelector("#current-button");
  currentButton.addEventListener("click", getCurrentLocation);
  
  /////// DATE //////
  
  var d = new Date();
  d.setDate(d.getDate());
  document.getElementById("date").innerHTML = d;
  