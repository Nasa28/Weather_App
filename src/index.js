import './assets/css/styles.css'
import 'bootstrap'

async function fetchData(){
  const response = await fetch()
    const result = await response.json();

    const city = result.name
    const temp = result.main.temp
    const description = result.weather[0].description
    const humidity = result.main.humidity
    const wind = result.wind.speed
    console.log(city, temp, description, humidity, wind);
}
    fetchData()