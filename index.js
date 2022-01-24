fetch('https://api.thedogapi.com/v1/breeds')
    .then(res => res.json())
    .then(dogImages => iterateDogs(dogImages))

function iterateDogs(dogImages) {
    dogImages.forEach(singleBreed => {
        renderDogImages(singleBreed.image.url)

        })
    }

function renderDogImages(breedURL) {
    let body = document.querySelector('body');
    let newImg = document.createElement('img')
    newImg.src = breedURL
    body.appendChild(newImg)
    
}
