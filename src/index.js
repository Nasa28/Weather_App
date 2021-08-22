import './assets/css/styles.css'
import 'bootstrap'
import fetchData from './data'
import * as dom from './dom';


dom.search.addEventListener('click', ()=>{
  fetchData()
})