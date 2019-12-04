function fetchData() {
    let city = document.getElementById('city-search').value;
    let apiKey = 'APPID=a024a34843bcf7c66ed9cfaba65cff91';
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=a024a34843bcf7c66ed9cfaba65cff91')
        .then(respnse => respnse.json())
        .then(data => {
            let humidity = data.main.humidity;
            let temprature = data.main.temp;
            let pressure = data.main.pressure;

            const humidityElement = document.querySelector('[data-humidity]')
            humidityElement.textContent = humidity;

            const tempratureElement = document.querySelector('[data-temperature]');
            tempratureElement.textContent = ((temprature - 273.15) * 9 / 5) + 32; //kelvin to fernahite


            const pressureElement = document.querySelector('[data-pressure]');
            pressureElement.textContent = pressure;
        })
        .catch(err => alert("wrong city Name"));
}