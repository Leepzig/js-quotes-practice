

class Api {
  
  static fetchQuotes = () => {
    document.querySelector("#quote-list").innerHTML = ""
    fetch("http://localhost:3000/quotes")
      .then(resp => resp.json())
      .then(quotes => {
        console.log(quotes)
        quotes.forEach(quoteObj => {
          let {id, quote, author} = quoteObj
          quote = new Quote(id, quote, author)
          quote.displayQuotes()
        })
      })
  }

  static createNewQuote = () => {
    

    fetch("http://localhost:3000/quotes", {
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(Api.getNewQuote())
    })
    .then(resp => resp.json())
    .then(quoteObj => {
      let {id, quote, author} = quoteObj
      quote = new Quote(id, quote, author)
      quote.displayQuotes()
    })
  }

  static getNewQuote = () => {
    const quote = document.getElementById("new-quote").value
    const author = document.getElementById("author").value
    return {quote:quote, author:author}
  }

}