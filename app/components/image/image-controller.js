function ImageController() {

	var imageService = new ImageService();

	function update(imageData) {		
		$('#body').css('background-image', `url(${imageData.url})`);
	}

	imageService.getImage(function (imageData) {
		update(imageData)
	})

}


