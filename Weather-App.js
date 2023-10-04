async function getWeather() {
  try {
    let searchValue = document.querySelector('.search').value
    let temp = document.querySelector('.temp')
    let city = document.querySelector('.city')
    let humi = document.querySelector('#humi')
    let windSpeed = document.querySelector('.wind-speed')
    let image = document.querySelector('.main-img')

    //^ Fetching-API
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=c6eade6acd708865cc3398b5280fc607`)
    let data = await response.json() 
    console.log(data);

    temp.innerHTML = Math.round(data.main.temp) + "°c"
    city.innerHTML = data.name
    humi.innerHTML = data.main.humidity + "%"
    windSpeed.innerHTML = data.wind.speed +"km/h"

    //^ Weather-Images
    let weatherImage = data.weather[0].main
    if (weatherImage == "Clouds") {
      image.src="./images/clouds.png"
    } else if (weatherImage == "Clear") {
      image.src="./images/clear.png"
    } else if (weatherImage == "Drizzle") {
      image.src="./images/drizzle.png"
    } else if (weatherImage == "Rain") {
      image.src="./images/rain.png" 
    } else if (weatherImage == "Mist") {
      image.src="./images/mist.png"
    } else if (weatherImage == "Snow") {
      image.src="./images/snow.png"
    }
  }
  catch(err) {
    console.log(err);
  }
}

//^Search-Button
let searchBtn = document.getElementById('icon') 
searchBtn.addEventListener("click",getWeather);