function WeatherController() {

	var weatherService = new WeatherService();

	function update(weatherData) {
		var weatherTemplate = ""
		var weather = document.getElementById("weather")
		weather.innerHTML = `
		${weatherData.name}: 
		 ${Math.round(weatherData.main.temp * 9 / 5 - 459.67)}`
	}

	weatherService.getWeather(function (weatherData) {
		update(weatherData)
		console.log(weatherData);
		//What can you do with this weather object?
	})

}
