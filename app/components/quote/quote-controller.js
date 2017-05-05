function QuoteController() {

	var qs = new QuoteService()

	function update(quoteData) {
	}

	qs.getQuote(function (quoteData) {
		console.log('What is the quote', quote)
	})
}
