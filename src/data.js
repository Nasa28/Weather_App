import * as dom from './dom';

export default async function fetchData(){
  
  const location= dom.city.value ||'enugu'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}&units=metric`;

 try{ const response = await fetch(url, {mode: 'cors'})
    const data = await response.json();
    const cityValue = data.name
    const tempValue = data.main.temp.toFixed(0)
    const descValue = data.weather[0].description
    const humidityValue = data.main.humidity
    const windValue= data.wind.speed
    const iconValue = data.weather[0].icon
    dom.cityName.textContent = `${cityValue}`
    dom.temp.textContent = `${tempValue} °C`
    dom.desc.textContent  =  descValue.toUpperCase()
    dom.humidity.textContent  = `HUMIDITY: ${humidityValue}%`
    dom.wind.textContent  = `WIND SPEED: ${windValue}mph`
    dom.icons.src =`https://openweathermap.org/img/wn/${iconValue}.png`
    document.querySelector('.weather').classList.remove("loading");

    
    dom.convert.addEventListener("click", ()=>{
      if(dom.temp.textContent.includes("°F")){
        dom.temp.textContent = `${tempValue} °C`
      }
    })

    dom.converter.addEventListener("click", ()=>{
      if( dom.temp.textContent.includes("°C")) 
      dom.temp.textContent = `${Math.floor(tempValue *1.8 + 32)} °F`              
    })

  }catch (error){
    if(error){
      dom.errors.innerHTML = `${dom.city.value.toUpperCase()} is not a valid City name`
      setTimeout("location.reload(true);",1500);
    }
  }
  
}

