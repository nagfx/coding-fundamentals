var content = document.querySelector(".catsPostsContainer")
const API_URL = "https://api.thecatapi.com/v1/breeds"

async function getCats() {
    const response = await fetch(API_URL)
    const results = await response.json()
    console.log(results)
    results.forEach((result) => {
        content.innerHTML +=`   <div class="cat-cards">
                                    
        <div class="cat-holder-1">
        <img class="image-box" src="${result.image.url}">
        </div>
                                    <div class="cat-holder-2">
    
                                        <div class="img_container">
                                            <div class="name">
                                                <h3 class="cat-name">${result.name}</h3>
                                            </div>
                                            <img>
                                            <div class="description">
                                                <p class="cat-text">
                                                    ${result.description}
                                                </p>
                                            </div>
                                        </div>
                                        <a class="button-profile" href="${result.vetstreet_url}">
                                        Profile
                                        </a>
                                    </div>
                                </div>`
    })
    
}
getCats()