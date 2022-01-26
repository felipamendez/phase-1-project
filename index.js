//hey Larry! if you see this and you still have a project in the flex program, please feel free to use this code for your phase one project. Don't want you're contributions to go to waste!

fetch('https://api.thedogapi.com/v1/breeds')
    .then(res => res.json())
    .then(dogImages => grabTenDogs(dogImages))

    function grabTenDogs(dogImages) {
        const tenDogImages = dogImages.slice(0,10)
            console.log(tenDogImages)
            iterateDogs(tenDogImages)
            
    }

    function iterateDogs(tenDogImages) {
        tenDogImages.forEach(singleBreed => {
           // let url = singleBreed.image.url
            // let name = singleBreed.name
            renderDogList(singleBreed)
           renderDogDetails(singleBreed)
        })
    }



function renderDogDetails(singleBreed) {
    //one details div
    let details = document.querySelector("#dog-details")
    //innerText img, name, to dog object to existing img and name tages
    details.querySelector("h2").innerText = singleBreed.name
    details.querySelector("img").src = singleBreed.image.url
};

function renderDogList(singleBreed) {
    let ul = document.querySelector("#ul_container")
    let li = document.createElement('li')
    li.innerText = singleBreed.name
    ul.appendChild(li)

    
    li.addEventListener("click", () => {
        renderDogDetails(singleBreed)
    })
}


let form = document.getElementById('dog_name');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let newDog = document.getElementById("new_dog_name")
    newDog.innerHTML = e.target["new_name"].value
    form.reset()
})

let likeButton = document.getElementById('like-btn')

likeButton.addEventListener('click', (e) => {
    let heart = document.getElementById("heart")
    if(heart.style.color != 'red') {
      heart.style.color = 'red'
      } else {
          heart.style.color = 'black'
      }
})

let select = document.querySelector("#rating_dropdown")

const emojiDiv = document.querySelector("#emoji_container_div")
emojiDiv.innerHTML = "&#128054"

select.addEventListener('change', (e) => {
    emojiDiv.innerHTML = "<div></div>"

    let rating = parseInt(e.target.value, 10)
    let i = 0
    
   function loop() {
       while(i < rating) {
        if (i !== rating) {
            let innerDiv = document.createElement("div")
            innerDiv.innerHTML = "&#128054"
            emojiDiv.appendChild(innerDiv)
            i++ 
        } }
    }
    loop()

    document.querySelector("#emoji_container_div div").remove()
})
    