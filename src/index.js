
document.addEventListener("DOMContentLoaded", () => {
  Api.fetchQuotes()
  addNewQuoteSubmit()
})


const addNewQuoteSubmit = () => {
  document.getElementById("new-quote-form").addEventListener("submit", (e) => {
    e.preventDefault()
    Api.createNewQuote()
  })
}
