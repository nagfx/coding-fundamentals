const API_URL = "https://api.github.com/users"
const inputText = document.querySelector("#inputUserGH").value
const imageAvatar = document.querySelector("#image-user")
const nameText = document.querySelector("#name")
const bioText = document.querySelector("#bio")
const joinDateText = document.querySelector("#join-date")
const searchButton = document.querySelector("#searchGHAPI")

async function getUsers() {
    const response = await fetch(`${API_URL}/${inputText}`)
    const data = await response.json()
    return data
}


async function getUser(name) {
    const users = await getUsers()
    // const user = users?.[name]
    // it doesn't work if I uncomment line 18 and put in line 20 "user"
    if(users) {
        nameText.textContent = users.name
        imageAvatar.src = users.avatar_url
        bioText.textContent = users.bio
        joinDateText.textContent = users.created_at.slice(0,10)
// I can't figure the datee part out
    }else {
        nameText.textContent = "No user found"
    }
}

searchButton.addEventListener('click', async() => {
    await getUsers()
})
searchButton.addEventListener('click', async (e) => {
    e.preventDefault()
    await getUser(inputText) 
    // console.log("button for search works")
})
