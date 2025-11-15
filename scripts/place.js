const countryData = {
    area: 17364,
    population: "1.24 million",
    capital: "Mbabane",
    languages: "Swati,English",
    currency: "Emalangeni",
    timeZone: "GMT+2",
    callingCode: '+268',
    internetTld: ".SZ"

};

// Populate HTML
document.getElementById('area').textContent = `Country: ${countryData.area}`;
document.getElementById('population').textContent = `Population: ${countryData.population.toLocaleString()}`;
document.getElementById('capital').textContent = `Capital: ${countryData.capital}`;
document.getElementById('languages').textContent = `Languages: ${countryData.languages}`;
document.getElementById('currency').textContent = `Currency: ${countryData.currency}`;
document.getElementById('timeZone').textContent = `Time Zone: ${countryData.timeZone}`;
document.getElementById('callingCode').textContent = `Calling Code: ${countryData.callingCode}`;
document.getElementById('internetTld').textContent = `Internet TLD: ${countryData.internetTld}`


// Wind Chill calculation
function calculateWindChillC(temp, wind) {
    if (temp > 10 || wind < 4.8) return temp; // formula valid only under these conditions
    const vPow = Math.pow(wind, 0.16);
    const windChill = 13.12 + 0.6215 * temp - 11.37 * vPow + 0.3965 * temp * vPow;
    return Math.round(windChill * 10) / 10;
}

// weather data
const weatherData = {
    temp: 10,          // °C
    wind: 5,         // km/h
    condition: "Partly Cloudy"
};

// Populate HTML
document.getElementById('temperature').textContent = `Temperature: ${weatherData.temp}°C`;
document.getElementById('wind').textContent = `Wind: ${weatherData.wind} km/h`;
document.getElementById('windChill').textContent = `Wind Chill: ${calculateWindChillC(weatherData.temp, weatherData.wind)}°C`;
document.getElementById('condition').textContent = `Condition: ${weatherData.condition}`;
