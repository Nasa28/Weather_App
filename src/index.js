import './assets/css/styles.css'
import 'bootstrap'
const search = document.querySelector('.search')
const city= document.querySelector('.search-input')
const temp = document.querySelector('.temp')
const  humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')
const desc = document.querySelector('.desc')
const cityName = document.querySelector('.city')
const icons = document.querySelector('.icon')

async function fetchData(){
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=&units=metric`;

   const response = await fetch(url, {mode: 'cors'})
    const data = await response.json();
    const cityValue = data.name
    const tempValue = data.main.temp
    const descValue = data.weather[0].description
    const humidityValue = data.main.humidity
    const windValue= data.wind.speed
    const iconValue = data.weather[0].icon
    
    cityName.innerHTML = `${cityValue}`
    temp.innerHTML = `${tempValue} °C`
    desc.innerHTML =  descValue.toUpperCase()
    humidity.innerHTML = `HUMIDITY: ${humidityValue}%`
    wind.innerHTML = `WIND SPEED: ${windValue}mph`
    icons.src =`https://openweathermap.org/img/wn/${iconValue}.png`

}

search.addEventListener('click', ()=>{
  fetchData()
})