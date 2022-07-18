const API_KEY = "064026b119180cf5b6752a88e6ffcb9a";

function onGeoOK(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url =  `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = data.name;
        city.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}








navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);







