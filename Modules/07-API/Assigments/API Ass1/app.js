const API_URL = "https://api.quotable.io/random"
const contentText = document.querySelector("#quote")
const authorText = document.querySelector("#author")
const buttonQuote = document.querySelector('#generateQuote')

async function getQuote() {
    const response = await fetch(API_URL)
    const data = await response.json()
    console.log(data)
    return data
    
}

 function setQuote({content, author}) {
    contentText.textContent = content
    authorText.textContent = author
 }


 buttonQuote.addEventListener("click", async () => {
    const data = await getQuote()
    setQuote(data)

 })
