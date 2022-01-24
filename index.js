fetch('https://api.thedogapi.com/v1/breeds')
    .then(res => res.json())
    .then(dogImages => grabFiveDogs(dogImages))

    function grabFiveDogs(dogImages) {
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
           //renderDogList(name)
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
