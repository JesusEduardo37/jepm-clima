const btnGetWeather = document.getElementById('btnWeather')
const citySearch = document.getElementById('city')
//const GradosSearch =document.getElementById('Grados')

btnGetWeather.addEventListener('click', () => {
    if(citySearch.value.trim().length > 0) {
        getWheather(citySearch.value)
    }   else {
        alert('Ciudad vacia... no jodas')
        citySearch.focus()
    }
})

const newData = () => {
    const city = document.getElementById('newCity')
    const current_weather = document.getElementById('current_weather')
    const last_update = document.getElementById('last_update')
    const temp = document.getElementById('temp')
    const wind = document.getElementById('wind')
    const humidity = document.getElementById('Humidity')
    const expected_temp = document.getElementById('expected_temp')

    city.textContent = cityFound.city
    current_weather.textContent = cityFound.current_weather
    last_update.textContent = cityFound.last_update
    temp.textContent = cityFound.temp
    wind.textContent = cityFound.wind
    humidity.textContent = cityFound.humidity
    expected_temp.textContent = cityFound.expected_temp
}


