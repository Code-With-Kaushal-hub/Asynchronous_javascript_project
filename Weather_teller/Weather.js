//const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`;
//const weatherUrl =`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m`;
let input=document.querySelector("#cityInput");
let but=document.querySelector("#searchBtn");
let cityName=document.querySelector("#cityName");
let temperature=document.querySelector("#temperature");
let weatherDescription=document.querySelector("#weatherDescription");
let feelsLike=document.querySelector("#feelsLike");
let humidity=document.querySelector("#humidity");
let wind=document.querySelector("#wind");
let loading=document.querySelector("#loading");

function getWeatherDescription(code) {
    switch (code) {
        case 0:
            return "Clear sky";

        case 1:
            return "Mainly clear";

        case 2:
            return "Partly cloudy";

        case 3:
            return "Overcast";

        case 45:
        case 48:
            return "Fog";

        case 51:
        case 53:
        case 55:
            return "Drizzle";

        case 61:
        case 63:
        case 65:
            return "Rain";

        case 71:
        case 73:
        case 75:
            return "Snow";

        case 80:
        case 81:
        case 82:
            return "Rain showers";

        case 95:
            return "Thunderstorm";

        case 96:
        case 99:
            return "Thunderstorm with hail";

        default:
            return "Unknown weather";
    }
}
but.addEventListener("click",()=>{
   loading.style.display="block";
   let city=input.value;
   let lat;
   let long;
   const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`;
   fetch(geoUrl).then((fun)=>{
        return fun.json();
   }).then((val)=>{
      lat=val.results[0].latitude;
      long=val.results[0].longitude;
      const weatherUrl =`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m`;
      return fetch(weatherUrl);
   }).then((fun)=>{
      
      return fun.json();
   })
   .then((value)=>{
      console.log(value);
      loading.style.display="none";
      cityName.textContent=city;
      temperature.textContent=value.current.apparent_temperature;
      humidity.textContent=`${value.current.relative_humidity_2m} %`;
      wind.textContent=`${value.current.wind_speed_10m} km/h`;
      feelsLike.textContent=`${value.current.temperature_2m} °C`;
      weatherDescription.textContent=getWeatherDescription(value.current.weather_code);

   })
})