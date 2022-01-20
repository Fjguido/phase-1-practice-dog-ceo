// console.log('%c HI', 'color: firebrick')
fetch("https://dog.ceo/api/breeds/image/random/4")
.then(res => res.json())
.then(dogs => processDogImage(dogs.message))
.catch(error => console.log(error))

function processDogImage(dogImages) {
    console.log(dogImages)
    
    const container = document.querySelector(`#dog-image-container`)
    dogImages.forEach(dogURL => { // for each b/c it
        const img = document.createElement('img')
        img.src = dogURL // shows dog images - src. uses link from fetched source
        img.alt = 'image of dog' // decribes there is a image if image does not load
        container.appendChild(img)

    })
}

fetch('https://dog.ceo/api/breeds/list/all')
.then(res => res.json())
.then(breed => processDogBreeds(breed.message))
.catch(error =>console.log(error))

function processDogBreeds(dogBreeds){
    console.log(dogBreeds)

    const ulDogBreed = document.querySelector(`#dog-breeds`)
    for(dogName in dogBreeds) { // for..in b/c
        const liDogBreed = document.createElement(`li`) 
        liDogBreed.textContent = dogName
        ulDogBreed.appendChild(liDogBreed)
        document.addEventListener("click", (e) => {
            e.target.style.color = (`blue`)
        })

        
        
    }

}


// const colorChange = document.getElementById("dog-breeds").addEventListener("click", (e) => {
//     e.target.style.color = ('blue')
    





    
    

  
