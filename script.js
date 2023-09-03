document.addEventListener("DOMContentLoaded", function () {
const apiKey = "7f3c31ddf7fa1650e8134d000e81aae8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button img");


async function checkWeather(city){
    const url = `${apiUrl}&q=${city}&appid=${apiKey}`;
    const response = await fetch(url);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
});