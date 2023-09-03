document.addEventListener("DOMContentLoaded", function () {
const apiKey = "7f3c31ddf7fa1650e8134d000e81aae8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button img");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const url = `${apiUrl}&q=${city}&appid=${apiKey}`;
    const response = await fetch(url);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }
    else{
        var data = await response.json();

        //console.log(data);
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }

   
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
});