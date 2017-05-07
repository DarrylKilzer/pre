function QuoteController() {

	var qs = new QuoteService()

	function update(quoteData) {
		var elem = document.getElementById("quote")
		elem.innerHTML = quoteData.quote
	}

	qs.getQuote(function (quoteData) {
		update(quoteData)
		console.log('What is the quote', quote)
	})
}
