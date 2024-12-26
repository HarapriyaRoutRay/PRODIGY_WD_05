const APIKEY = 'c4b469446da64a62a7455412241903';

const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');

// Referencing output fields
const cityName = document.getElementById('city-name');
const countryName = document.getElementById('countryName');
const localTime = document.getElementById('loc-time');
const temp = document.getElementById('temp');
const sup = document.getElementById('sup');

async function getData(KEY, cityName) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${cityName}&aqi=yes`);
    return await response.json();
}

searchBtn.addEventListener('click', async () => {
    const input = cityInput.value;
    document.getElementById('outputCard').style.visibility = 'visible';
    
    const result = await getData(APIKEY, input);

    // Fixing the use of template literals
    cityName.innerText = `${result.location.name}, ${result.location.region}`;
    countryName.innerText = `${result.location.country}`;
    temp.innerText = `${result.current.temp_c}`;
    sup.innerText = '°C';
    localTime.innerText = '${result.location.localtime}';
});