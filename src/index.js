import './css/styles.css';
import fetchCountries from './fetchCountries';
import debounce from 'lodash.debounce'

const DEBOUNCE_DELAY = 300;
const inputEl = document.getElementById(`search-box`);
const countryList = document.querySelector(`.country-list`);
const countryInfo = document.querySelector(`.country-info`)

inputEl.addEventListener('input',debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
    e.preventDefault();
const form = e.target.value;
   if (!form) {
    clearForm();
   }
 
    fetchCountries(form)
    .then(createCard)
    // .catch(error => {
    //     return alert('Oops, there is no country with that name');
    // })
}

function createCard(country) {
    if(country.length > 10){
        clearForm();
        return alert('Too many matches found. Please enter a more specific name.')
    }  
    if(country.length > 2 && country.length < 10) {
        const cardList = country.map(({flags, name}) => {
            return 
            '<li> <img src = ${flags.svg} alt = "Country flag" width = 100><p>${name.official}</p></li>';
    })
    .join('');
    countryList.innerHTML= cardList;
    countryInfo.innerHTML = '';

        }
        if (country.length === 1) {
            const cardInfo = country.map(({flags, name,capital,population,language}) => {
            return 
            '<li><img src = ${flags.svg} alt = "Country flag" width = 100><h1>${name.official}</h1><p>${capital}</p><p>${population}</p><p>${language}</p></li>';
        }).join('');
        countryInfo.innerHTML = cardInfo;
        inputEl.innerHTML = '';
    }

    function clearForm() {
        inputEl.innerHTML = '';
        countryInfo.innerHTML = '';
    }
}
        
