function WeatherController() {

	var weatherService = new WeatherService();
	var tempFah = false

	function update(weatherData) {
		tempFah = !tempFah
		var template = ''
		var weather = document.getElementById("weather")
		if (tempFah == true) {
			template = `<h3>${weatherService.weather.name} is <a href="#" id="toggle-temp">${(weatherService.weather.main.temp *(9/5) - 459.67).toFixed(1) + "°F"}</a></h3>`
		}
		else {
			template = `<h3>${weatherService.weather.name}: <a href="#" id="toggle-temp">${(weatherService.weather.main.temp - 273.15).toFixed(1) + "°C"}</a></h3>`
		}
		weather.innerHTML = template
		var temp
	}

	weatherService.getWeather(function (weatherData) {
		weatherService.weatherData = temperature
		console.log(weatherData);
	})
}
