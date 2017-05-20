function QuoteController() {

	var qs = new QuoteService()

	function update(quoteData) {
		var elem = document.getElementById("quote")
		elem.innerHTML = `
		<br>
		<div class="col-xs-6 col-xs-offset-3 text-center">
			<div id="quote">
				<h3><strong>${quoteData.quote}</strong></h3>
				<h5 id="author">${quoteData.author}</h5>
			</div>
		</div>
		`
	}

	qs.getQuote(function (quoteData) {
		update(quoteData)
		console.log('What is the quote', quote)
	})
}
