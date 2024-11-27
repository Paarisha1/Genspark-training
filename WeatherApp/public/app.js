let id = '9505fd1df737e20152fbd78cdb289b6a';
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + id;
let city = document.querySelector('.name');
let form = document.querySelector("form");
let temperature = document.querySelector('.temperature');
let description = document.querySelector('.description');
let valueSearch = document.getElementById('name');
let clouds = document.getElementById('clouds');
let humidity = document.getElementById('humidity');
let pressure = document.getElementById('pressure');
let main = document.querySelector('main');
form.addEventListener("submit", (e) => {
    e.preventDefault();  
    if(valueSearch.value != ''){
        searchWeather();
    }
});
const searchWeather = () => {
    fetch(url+'&q='+ valueSearch.value)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.cod == 200){
                city.querySelector('figcaption').innerHTML = data.name;
                city.querySelector('img').src = `https://flagsapi.com/${data.sys.country}/shiny/32.png`;
                temperature.querySelector('img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
                temperature.querySelector('span').innerText = data.main.temp;
                description.innerText = data.weather[0].description;

                clouds.innerText = data.clouds.all;
                humidity.innerText = data.main.humidity;
                pressure.innerText = data.main.pressure;
            }else{
                main.classList.add('error');
                setTimeout(() => {
                    main.classList.remove('error');
                }, 1000);
            }
            valueSearch.value = '';
        })
}
// search Default
const initApp = () => {
    valueSearch.value = 'Washington';
    searchWeather();
}
initApp();



























// This JavaScript code interacts with the OpenWeatherMap API to fetch and display weather information for a given city. Let's break down the functionality:

// API Configuration:

// id stores the API key required to access the OpenWeatherMap API.
// url defines the base URL for fetching weather data in metric units (Celsius) using the API key.
// HTML Elements:

// Several elements from the HTML document are selected using document.querySelector and document.getElementById to dynamically update the content:
// city: Displays the city name and flag.
// form: The form element where the user submits a search query.
// temperature: Displays the current temperature and weather icon.
// description: Displays a brief description of the weather (e.g., "clear sky").
// valueSearch: The input field where the user types the city name.
// clouds, humidity, pressure: Display the percentage of cloud cover, humidity, and pressure, respectively.
// main: This is used to apply an error state (via CSS class).
// Form Event Listener:

// An event listener is added to the form, which triggers on form submission (submit event).
// e.preventDefault() prevents the default form submission behavior (reloading the page).
// If the search field (valueSearch) is not empty, it calls the searchWeather() function to fetch weather data.
// Weather Search Function (searchWeather):

// This function constructs a request URL by appending the city name (valueSearch.value) to the base URL and API key.
// The fetch method sends a request to the OpenWeatherMap API and waits for the response in JSON format.
// If the response is successful (data.cod == 200), it updates the HTML elements with weather details:
// city.querySelector('figcaption'): Displays the city name.
// city.querySelector('img'): Displays the country's flag using the FlagsAPI.
// temperature.querySelector('img'): Displays a weather icon.
// temperature.querySelector('span'): Displays the current temperature.
// description: Displays a short weather description.
// clouds, humidity, pressure: Update the respective weather parameters.
// If the response fails (e.g., invalid city name), an error class is applied to the main element, which is removed after 1 second using setTimeout().
// Initialization (initApp):

// This function sets a default city name (Washington) in the search field when the page loads and calls searchWeather() to fetch and display the weather for Washington.