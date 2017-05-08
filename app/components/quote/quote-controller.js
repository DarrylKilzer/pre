function QuoteController() {

	var qs = new QuoteService()

	function update(quoteData) {
		var elem = document.getElementById("quote")
		elem.innerHTML = `<h1><strong>${quoteData.quote}</strong></h1>`
	}

	qs.getQuote(function (quoteData) {
		update(quoteData)
		console.log('What is the quote', quote)
	})
}
