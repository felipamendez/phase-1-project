//hey Larry! if you see this and you still have a project in the flex program, please feel free to use this code for your phase one project. Don't want you're contributions to go to waste!

fetch('https://api.thedogapi.com/v1/breeds')
    .then(res => res.json())
    .then(dogImages => grabFourteenDogs(dogImages))


function grabFourteenDogs(dogImages) {
    const fourteenDogImages = dogImages.slice(0,14)
        iterateDogs(fourteenDogImages)
            
}


function iterateDogs(fouteenDogImages) {
    fouteenDogImages.forEach(singleBreed => {
        renderDogList(singleBreed)
        renderDogDetails(singleBreed)
    })
}


function renderDogDetails(singleBreed) {
    let details = document.querySelector("#dog-details")
    details.querySelector("h2").innerText = singleBreed.name
    details.querySelector("img").src = singleBreed.image.url
}


function renderDogList(singleBreed) {
    let ul = document.querySelector("#ul_container")
    let li = document.createElement('li')
    li.innerText = singleBreed.name
    ul.appendChild(li)

    
    li.addEventListener("click", () => renderDogDetails(singleBreed))
}


let form = document.getElementById('dog_name');

form.addEventListener('submit', (e) => {

    e.preventDefault()
    let newDog = document.getElementById("new_dog_name")
    newDog.innerHTML = e.target["new_name"].value
    form.reset()

})


let likeButton = document.getElementById('like-btn')

likeButton.addEventListener('click', () => {

    let heart = document.getElementById("heart")
    if(heart.style.color != 'red') {
      heart.style.color = 'red'
      } else {
          heart.style.color = 'black'
      }

})


let dropdown = document.querySelector("#rating_dropdown")
const emojiDiv = document.querySelector("#emoji_container_div")
emojiDiv.innerHTML = "&#128054"

dropdown.addEventListener('change', (e) => {
    
    emojiDiv.innerHTML = "<div></div>"
    let rating = parseInt(e.target.value, 10)
    let i = 0
    
    while(i < rating) {
        if (i !== rating) {
            let innerDiv = document.createElement("div")
            innerDiv.innerHTML = "&#128054"
            emojiDiv.appendChild(innerDiv)
            i++ 
        } 
    }

    document.querySelector("#emoji_container_div div").remove()
})
    

let fetchButton = document.querySelector("#play_fetch_button")

fetchButton.addEventListener("click", () => {

    let ball = document.querySelector("#ball_container_div")
    if(ball.innerHTML != `<div class="animate__animated animate__slideInLeft">🎾</div>`) {
        ball.innerHTML = `<div class="animate__animated animate__slideInLeft">🎾</div>`
        } else {
            ball.innerHTML = " "
        }

})