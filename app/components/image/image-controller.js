function ImageController() {

	var imageService = new ImageService();

	function update(imageData) {
		// 	var css = `body {background-image: ${imagedata.url.value}`
		// 	var head = document.head || document.getElementsByTagName('head')[0]
		// 	var style = document.createElement('style');

		// 	style.type = 'text/css';
		// 	if (style.styleSheet) {
		// 		style.styleSheet.cssText = css;
		// 	} else {
		// 		style.appendChild(document.createTextNode(css));
		// 	}
		// 	head.appendChild(style);
		
		$('#body').css('background-image', `url(${imageData.url})`);
	}

	imageService.getImage(function (imageData) {
		update(imageData)
	})

}


