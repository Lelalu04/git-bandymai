let numElement = document.querySelector("#numbers")
let divButtonsContainer = document.createElement("div")
let h3 = document.createElement("h3")
let buttonPluse = document.createElement("button")
let buttonMinuse = document.createElement("button")
let buttonReset = document.createElement("button")
let countButtonPluse = document.createElement("button")
let countButtonMinuse = document.createElement("button")
let divCountButtons = document.createElement("div")
let divButtons = document.createElement("div")
let writeAScore = document.createElement("button")
let resetAScore = document.createElement("button")
let input = document.createElement("input")
let p = document.createElement("p")
let h4 = document.createElement("h4")
let ul = document.createElement("ul")
let maxCount = 10
let minCount = 2
let changeColorUnderCount = 5

input.type = "number"
input.min = "1"

input.value = minCount

h3.textContent = "0"
h4.textContent = "Balai:"
p.textContent = "1"

let h3num = Number(h3.textContent)
let pnum = Number(p.textContent)

countButtonPluse.textContent = "+"
countButtonPluse.className = "button2"

countButtonMinuse.textContent = "-"
countButtonMinuse.className = "button2"

buttonPluse.textContent = "+"
buttonPluse.className = "button"

buttonMinuse.textContent = "-"
buttonMinuse.className = "button"

buttonReset.textContent = "RESET"

writeAScore.textContent = "Write a score"
resetAScore.textContent = "Reset a score"


numElement.append(input, h3, divButtonsContainer, h4,  writeAScore, resetAScore)
divButtonsContainer.append(divButtons, divCountButtons)
divButtons.append(buttonPluse, buttonMinuse, buttonReset)
divCountButtons.append(p, countButtonPluse, countButtonMinuse)

cssFunc()
checkingDisabled(h3)

input.addEventListener("input" , () => {
    h3.textContent = input.value
})

writeAScore.addEventListener("click", () => {
    numElement.append(ul)
    let li = document.createElement("li")
    ul.prepend(li)
    li.textContent = parseInt(h3.textContent)
    h3.textContent = minCount
    checkingDisabled(li)
    li.addEventListener("click", () => {
        li.remove()
    })
})

resetAScore.addEventListener("click", () => {
    document.querySelectorAll("li").forEach(score => score.remove())
})

countButtonPluse.addEventListener("click", () => {
    p.textContent++
})

countButtonMinuse.addEventListener("click", () => {
    if(p.textContent > 1) {
        p.textContent--
    }
})

buttonPluse.addEventListener("click", () => {
    addingCount(Number(p.textContent))
    input.value = h3.textContent
})
buttonMinuse.addEventListener("click", () => {
    minusingCount(Number(p.textContent))
    input.value = h3.textContent
})
buttonReset.addEventListener("click", () => {
    h3.textContent = 0
    checkingDisabled(h3)
    input.value = h3.textContent
})

function cssFunc() {
    let buttonsStyle = document.querySelectorAll(".button")
    buttonsStyle.forEach(element => {
        element.style = `width: 100px;
                        padding: 20px 30px;
                        font-size: 43px;`
    })
    numElement.style = `width: 250px;
                        display: flex;
                        flex-direction: column;`

    h3.style = `display: flex;
                justify-content: center;`
    buttonReset.style = `width: 200px;
                         height: 50px;
                         color: blue;
                         height: 59px;
                         background-color: pink;`

    divButtonsContainer.style = `display: flex`

    divButtons.style = 'width: min-content;'

    divCountButtons.style = `display: grid;
                             grid-template-rows: 1fr 1fr 1fr;
                             justify-items: center;
                             width: 50px`

    countButtonPluse.style = `width: 100%;`
    countButtonMinuse.style = `width: 100%;`

    p.style = `padding-top: auto;
    padding-bottom: auto;
    padding: 1px 20px;
    padding: 1px 20px;
               margin: 0px;
               background-color: red`

}

function addingCount(addCount) {
    if (h3num <= maxCount - addCount) {

        h3.textContent = Number(h3.textContent) + addCount
    } else {
        h3.textContent = maxCount
    }
    checkingDisabled(h3)

}
function minusingCount(minusCount) {

    if (h3.textContent <= minusCount + 1) {

        h3.textContent = minCount
    } else {
        h3.textContent = Number(h3.textContent) - minusCount
    }
    checkingDisabled(h3)
}

function checkingDisabled(element) {

    if (h3.textContent < minCount + 1) {
        buttonMinuse.setAttribute("disabled", true)
        changeBackgroundColor(buttonMinuse, "red")
    } else {
        buttonMinuse.removeAttribute("disabled")
        changeBackgroundColor(buttonMinuse, "green")
    }
    if (h3.textContent == maxCount) {
        buttonPluse.setAttribute("disabled", true)
        changeBackgroundColor(buttonPluse, "red")
    } else {
        buttonPluse.removeAttribute("disabled")
        changeBackgroundColor(buttonPluse, "green")
    }
    if (element.textContent < changeColorUnderCount) {
        element.style.color = "red"
    } else {
        element.style.color = "green"
    }
}
function changeBackgroundColor(button, color) {
    button.style.backgroundColor = color
}

// 13. Sukurti naują elementą (h4) ir jį pridėti į „numbers" elemento pabaigą.
// 13.1. Šio elemento tekstas turėtų būti „Balai:"
// 14. Sukurti naują elementą (ul) ir jį pridėti į „numbers" elemento pabaigą.
// 14.1. Sukurti naują mygtuką, kurio teksta būtų „Įrašyti balą".
// 14.2. Paspaudus šį mygtuką, reikia paimti reikšmę iš h3 elemento ir sukurti naują li elementą bei jį append'inti prie ul elemento.
// 14.3. Nuresetinti skaičiuoklę.

// 7. Jeigu skaitmuo h3 komponente yra mažesnis už du, tai „-" mygtukas turėtų patapti neveiksnus (disabled)- element.setAttribute('disabled', true) / element.removeAttribute('disabled')
// 8. Jeigu skaitmuo h3 komponente yra 10, tai „+" myktukas turėtų patapti neveiksnus (disabled)
// 9. Jeigu skaitmuo yra 5 arba daugiau, tai jo spalva turėtų būti žalia. Kitu atveju - raudona.

// Užduotis:
// 1. Sukurti HTML elementą, kurio id „numbers"
// 2. JavaScript pagalba šio elemento viduje sukurti: h3 elementą ir du mygtukų elementus
// 3. h3 elemento tekstas turėtų būti „0"
// 4. Mygtukų tekstas turėtų būti „+" ir „-"
// 5. Sukurti „click" (paspaudimo) event listener'ius abiems mygtukams.
// 6. „-" mygtuko event listeneris turėtų iškviesti funkciją, kuri sumažina skaičių h3 elemente, o „+" mygtuko paspaudimas turėtų skaičių padidinti