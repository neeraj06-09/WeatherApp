//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}   

const weatherApi = {
    key: "c165dd52e51a1693927aa507c55c2d57",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather?"
}
const searchInputBox = document.getElementById('input-box');
 searchInputBox.addEventListener('keypress', (event)=>{
     if(event.key == 13){
         console.log(searchInputBox.value)
     }

 });

 function getWeatherReport(city){
     fetch(`${weatherApi.baseUrl}?q=$(city)&appid=${weatherApi.key}`)
 }

