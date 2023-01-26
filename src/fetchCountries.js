export default function fetchCountries (name) {
   const url = `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`;

   return  fetch(url)
    .then(response => {
        return response.json();
     })
     .then(country =>{
       console.log(country);
     })
     .catch(error => {
        console.log(error);
     })
    
}