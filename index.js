fetch('https://api.thedogapi.com/v1/breeds')
    .then(res => res.json())
    .then(dogImages => grabFiveDogs(dogImages))

    function grabFiveDogs(dogImages) {
        const fiveDogImages = dogImages.slice(0,5)
            console.log(fiveDogImages)
            iterateDogs(fiveDogImages)
            
    }

    function iterateDogs(fiveDogImages) {
        fiveDogImages.forEach(singleBreed => {
           renderDogImages(singleBreed.image.url)
        })
    }



function renderDogImages(breedURL) {
    let newImg = document.createElement('img');
    let header = document.querySelector('header');
    header.insertAdjacentElement('afterend', newImg)
    newImg.src = breedURL
    
    
};
