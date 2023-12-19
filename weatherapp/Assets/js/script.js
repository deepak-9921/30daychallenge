const apikey = "c9d363731c1bc9a2332549cb43d1b2b1";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatheIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }
    else {

        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°c';
        document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
        document.querySelector(".wind").innerHTML = data.wind.speed + ' km/h';


        if (data.weather[0].main == "Clouds") {
            weatheIcon.src = "Assets/images/clouds.png"
        }
        else if (data.weather[0].main == "Clear") {
            weatheIcon.src = "Assets/images/clear.png"
        }
        else if (data.weather[0].main == "Rain") {
            weatheIcon.src = "Assets/images/rain.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatheIcon.src = "Assets/images/drizzle.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatheIcon.src = "Assets/images/mist.png"
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})