import './css/styles.css';
import fetchCountries from './fetchCountries';
import debounce from 'lodash.debounce'
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const inputEl = document.getElementById(`search-box`);
const countryList = document.querySelector(`.country-list`);
const countryInfo = document.querySelector(`.country-info`);


inputEl.addEventListener('input',debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
   e.preventDefault();
  const form = inputEl.value.trim();

   if (!form) {
    clearForm();
    return;
   }
 
    fetchCountries(form)
    .then (createCard)
    .catch(error => {
        Notiflix.Notify.failure('Oops, there is no country with that name')
})
    }

function createCard(country) {
    if (country.length > 10){
        clearForm();

        Notiflix.Notify.failure('Too many matches found. Please enter a more specific name.')
        console.log(error);
    
    }  
    if(country.length > 2 && country.length < 10) {
        console.log(country);
        const cardList = country.map(({name,flags}) => {
            return `
            <li> <img src = ${flags.svg} alt = "Country flag" width = 100><span>${name.official}</span></li>`;
            
    }).join('');
    console.log(cardList);
    countryList.innerHTML = cardList;
    countryInfo.innerHTML = '';

        }
        if (country.length === 1) {
            const cardInfo = country.map(({flags, name,capital,population,languages}) => {
            return `
            <li><img src = ${flags.svg} alt = "Country flag" width = 100><h1>${name.official}</h1><p>${capital}</p><p>${population}</p><p>${languages}</p></li>`;
        }).join('');
        countryInfo.innerHTML = cardInfo;
        inputEl.innerHTML = '';
    }

    function clearForm() {
        inputEl.innerHTML = '';
        countryInfo.innerHTML = '';
    }
}
        
