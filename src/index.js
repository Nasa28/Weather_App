import './assets/css/styles.css';
import 'bootstrap';
import * as dom from './dom';
import fetchData from './data';

dom.search.addEventListener('submit', (event) => {
  event.preventDefault();
  fetchData();
  dom.city.value = '';
});

dom.city.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (event.key === 'Enter') fetchData();
});

fetchData();
