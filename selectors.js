let h2Element = document.querySelector("h2#title-id")
h2Element.style.color = "white"
h2Element.style.backgroundColor = "green"

let liElement = document.querySelector("li")
liElement.style.color = "red"
console.log(liElement)

let allLiElements = document.querySelectorAll("li")
console.log(allLiElements)

allLiElements.forEach(element => {
    console.log(element)
    element.style.color = "green"
})

let h2TitleId = document.querySelectorAll("h2#title-id")
h2TitleId.forEach(element => element.style.color = "red")