const API_URL = "https://gist.githubusercontent.com/nagfx/9ce02ea15f6f66a7d7cedf432a333259/raw/d2a0a179c3ebdfc51f584e8cc4797576e0c59868/me.json"
const nameText = document.querySelector('#name')
const ageText = document.querySelector('#age')
const hobbiesList = document.querySelector('#hobbies')
const ganduText = document.querySelector('#gandu')
const buttonFetch = document.querySelector("#fetchDisplay")
const dataWindow = document.querySelector(".displayContainer")
console.log(dataWindow)

var isDataFetched = false;


async function getData() {
    const response = await fetch(API_URL)
    const data = await response.json()
    return data
}
function dataDisplayer({name, age, hobbies }) {
    nameText.textContent = name
    ageText.textContent = age
    hobbies.forEach(hobby => {
        hobbiesList.innerHTML += `
        <li>${hobby}</li>
        `
    })
}

function fetchDataDisplay() {
    if(!isDataFetched) {
        dataWindow.className = "displayContainer";
        isDataFetched = !isDataFetched;
        console.log(isDataFetched)
    }else {
        dataWindow.classname = "displayContainer hide";
        isDataFetched = !isDataFetched;
        console.log(isDataFetched)

    }
}

window.addEventListener('load', async () => {
    const data = await getData()
    dataDisplayer(data)
})