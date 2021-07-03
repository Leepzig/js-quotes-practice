

class Quote {

  static all = []

  constructor(id, quote, author) {
    this.id = id
    this.quote = quote
    this.author = author
    Quote.all.push(this)
  }

    // <li class='quote-card'>
    //   <blockquote class="blockquote">
    //     <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    //     <footer class="blockquote-footer">Someone famous</footer>
    //     <br>
    //     <button class='btn-success'>Likes: <span>0</span></button>
    //     <button class='btn-danger'>Delete</button>
    //   </blockquote>
    // </li>
    
  displayQuotes = () => {

    const li = document.createElement("li")
    const blockquote = document.createElement("blockquote")
    const p = document.createElement("p")
    const footer = document.createElement("footer")
    const likeButton =document.createElement("button")
    const deleteButton =document.createElement("button")
    const br = document.createElement("br")

    li.setAttribute("class", "quote-card")
    blockquote.className = "blockquote"
    p.className = "mb-0"
    footer.className = "blockquote-footer"
    likeButton.className = "btn-success"
    deleteButton.className = "btn-danger"

    p.innerText = this.quote
    footer.innerText = this.author
    likeButton.innerText = "Likes:"
    deleteButton.innerText = "Delete"

  
    //likeButton.addEventListener("click", doSomething)
    deleteButton.addEventListener("click", () => {
      
      this.deleteQuote()
      Api.fetchQuotes()
      //asynchronous behavior is messing with the display :(
    })

    blockquote.append(p, footer, br, likeButton, deleteButton)
    li.appendChild(blockquote)
    document.querySelector("#quote-list").append(li)
  }

  //why isn't this working?
  //asynchonous behavior I think....
  async deleteQuote() {
    await fetch(("http://localhost:3000/quotes/" + this.id), {
      method:"DELETE",
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    })
    
  }

}

