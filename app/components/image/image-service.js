function ImageService() {
	var url = '//bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://www.splashbase.co/api/v1/images/random'
	var apiUrl = url + encodeURIComponent(url2);

	this.getImage = function (callWhenDone) {
		$.get(apiUrl, function (res) {
			res = JSON.parse(res)
			localStorage.setItem('image', JSON.stringify(res))
			console.log('Image Data:', res)
			callWhenDone(res);
		})
	}
}
