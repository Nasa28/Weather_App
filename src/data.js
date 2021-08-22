import * as dom from './dom';

export default async function fetchData(){
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${dom.city.value}&appid=&units=metric`;

   const response = await fetch(url, {mode: 'cors'})
    const data = await response.json();
    const cityValue = data.name
    const tempValue = data.main.temp
    const descValue = data.weather[0].description
    const humidityValue = data.main.humidity
    const windValue= data.wind.speed
    const iconValue = data.weather[0].icon
    
    dom.cityName.innerHTML = `${cityValue}`
    dom.temp.innerHTML = `${tempValue} °C`
    dom.desc.innerHTML =  descValue.toUpperCase()
    dom.humidity.innerHTML = `HUMIDITY: ${humidityValue}%`
    dom.wind.innerHTML = `WIND SPEED: ${windValue}mph`
    dom.icons.src =`https://openweathermap.org/img/wn/${iconValue}.png`

}