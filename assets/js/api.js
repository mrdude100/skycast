'use strict';

const apiKey= "5a6e0e2f01210995da601ae9ec53d0b0";

export const fetchData = (URL,callback)=>{
    fetch(`${URL}&appid=${apiKey}`)
    .then(res=>res.json())
    .then(data=>callback(data))
}

export const url ={
    currentWeather(lat,lon){
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
    },
    forecast(lat,lon){
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
    },
    airPollution(lat,lon){
        return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
    },
    reverseGeo(lat,lon){
        return `https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
    },
    /**
     * @param {string} query search query e.g. :"london" , "New Yourk"  
     */
    geo(query){
        return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
    }
}