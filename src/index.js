import './css/styles.css';
import fetchCountries from './fetchCountries';
import debounce from 'lodash.debounce'
const DEBOUNCE_DELAY = 300;
const inputEl = document.getElementById(`search-box`)

inputEl.addEventListener('input',debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
    e.preventDefault();
const form = e.target.value;
  
    
    console.log(form);
}

fetchCountries('italy');