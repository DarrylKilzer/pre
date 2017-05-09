function WeatherController() {

	var weatherService = new WeatherService();

	function update(weatherData) {
		var weatherTemplate = ""
		var weather = document.getElementById("weather")
		weather.innerHTML = `
		<strong><h2>
		${weatherData.name}: 
		 ${Math.round(weatherData.main.temp * 9 / 5 - 459.67)}
		 </h2></strong>`
	}

	weatherService.getWeather(function (weatherData) {
		update(weatherData)
		console.log(weatherData);
	})

}
