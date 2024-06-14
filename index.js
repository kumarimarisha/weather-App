const apikey="9a496f7c8a2b49e08a801eec3b8810ab";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon");


async function checkWeather(city){
    const response=await fetch(apiUrl+city+`&appid=${apikey}`);
    var data= await response.json();
   
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";

    if(data.weather[0].main=="Clouds"){
        weathericon.src="./weather-app-img/images/clouds.png";
    }else
    if(data.weather[0].main=="Drizzle"){
        weathericon.src="./weather-app-img/images/drizzle.png";
    }else
    if(data.weather[0].main=="Mist"){
        weathericon.src="./weather-app-img/images/mist.png";
    }else
    if(data.weather[0].main=="Rain"){
        weathericon.src="./weather-app-img/images/rain.png";
    }else if(data.weather[0].main=="Clear"){
        weathericon.src="./weather-app-img/images/clear.png"; 
    }

    document.querySelector(".weather").style.display="block";

}

searchbtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})