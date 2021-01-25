
const api = {
    key: "c165dd52e51a1693927aa507c55c2d57",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.input-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt){
    if(evt.keyCode == 13){
        getResults(searchbox.value);
        
    }
}

function getResults(query){
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);

}

function displayResults(weather){
    console.log(weather);
    let city = document.querySelector('.location .city')
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let temp2 = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}&degC`;

    let weatherType = document.getElementById('weather');
    weatherType.innerHTML = `${weather.weather[0].main}`;
}

function dateBuilder(d){
    let months = ["Jan","Feb","March","April","May","June","July","August","Sept","Oct","Nov","Dec",];
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}

