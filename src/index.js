import './assets/css/styles.css'
import 'bootstrap'
import * as dom from './dom';
import fetchData from './data'



dom.search.addEventListener('click', ()=>{
  
  fetchData()
   dom.city.value = ""
})

dom.city.addEventListener("keydown", (event)=>{
  if(event.key === "Enter")
  fetchData()
})


fetchData()
