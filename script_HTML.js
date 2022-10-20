// 5. Atlikti tatį, kaip ir ketvirtoje užduotyje, tačiau atsakymus išvesti ne į konsolę, o į ul elementus.
// 5.1. Kiekvienai užduočiai HTML faile sukurti naują ul elementą ir jam priskirti unikalų id, pvz.:
//   <ul id="task-41"></ul>
//   <ul id="task-42"></ul>
//   <ul id="task-43"></ul>
//   Ir t.t.
// 5.2. JavaScript'e paselektinti šiuos elementus.
// 5.3. Kiekvienas ketvirtos užduoties ciklo atsakymas turėtų būti įdėtas į li elementą.
// 5.4. Kiekvienas li elementas turėtų būti įdėtas į atitinkamą ul elementą.

function toHTML(htmlID, result) {
    let listArray = document.querySelector(htmlID)
    listArray.innerHTML += result
}
// 4.1. Tik skaičius (number tipo duomenis).\
function task1() {
    result = []
    for (let i = 0; i < array.length; i++) {
        if (!isNaN(array[i])) {

            result = `<li> ${array[i]} </li>`
            toHTML("#task-1", result)
        }
    }
}
function task1Map() {
    result = []
    array.map(num => {
        if (!isNaN(num)) {
            result = `<li> ${num} </li>`
            toHTML("#task-1", result)
        }
    })
}
// task1()
task1Map()

// 4.2. Tik tekstą (string tipo duomenis).
function task2() {
    result = []
    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            result = `<li> ${array[i]} </li>`
            toHTML("#task-2", result)
        }
    }
}
function task2Map() {
    let result = []
    array.map(num => {
        if (isNaN(num)) {
            result = `<li> ${num} </li>`
            toHTML("#task-2", result)
        }
    })
}
// task2()
task2Map()


// 4.3. Tik skaičius (number tipo duomenis) ir juos pakelti 4-tuoju laipsniu.
function task3() {
    result = []
    for (let i = 0; i < array.length; i++) {
        if (!isNaN(array[i])) {
            let raisedDegree = array[i]
            raisedDegree = raisedDegree ** 4
            result = `<li> ${raisedDegree} </li>`
            toHTML("#task-3", result)
        }
    }

}
function task3Map() {
    result = []
    array.map(num => {
        if (!isNaN(num)) {
            let raisedDegree = num
            raisedDegree = raisedDegree ** 4
            result = `<li> ${raisedDegree} </li>`
            toHTML("#task-3", result)
        }
    })
}
// task3()
task3Map()

// 4.4. Tik skaičius (number tipo duomenis) ir prie jų pridėti 55.
function task4() {
    result = []
    for (let i = 0; i < array.length; i++) {
        if (!isNaN(array[i])) {
            let raisedDegree = array[i]
            raisedDegree = raisedDegree + 55
            result = `<li> ${raisedDegree} </li>`
            toHTML("#task-4", result)
        }
    }

}
function task4Map() {
    result = []
    array.map(num => {
        if (!isNaN(num)) {
            let raisedDegree = num
            raisedDegree = raisedDegree + 55
            result = `<li> ${raisedDegree} </li>`
            toHTML("#task-4", result)
        }
    })

}
// task4()
task4Map()


// 4.5. Tik skaičius (number tipo duomenis) ir juos padalinti iš 2.
function task5() {
    result = []
    for (let i = 0; i < array.length; i++) {
        if (!isNaN(array[i])) {
            let raisedDegree = array[i]
            raisedDegree = raisedDegree / 2
            result = `<li> ${raisedDegree} </li>`
            toHTML("#task-5", result)
        }
    }
}
function task5Map() {
    result = []
    array.map(num => {
        if (!isNaN(num)) {
            let raisedDegree = num
            raisedDegree = raisedDegree / 2
            result = `<li> ${raisedDegree} </li>`
            toHTML("#task-5", result)
        }
    })
}

// task5()
task5Map()


// 4.6. Tik skaičius (number tipo duomenis) ir prieš juos pridėti teksta, tokiu formatu: "Number: 2".
function task6() {
    result = []
    for (let i = 0; i < array.length; i++) {
        if (!isNaN(array[i])) {
            result = `<li>Number:  ${array[i]} </li>`
            toHTML("#task-6", result)
        }
    }

}
function task6Map(params) {
    result = []
    array.map(num => {
        if (!isNaN(num)) {
            result = `<li>Number:  ${num} </li>`
            toHTML("#task-6", result)

        }
    })
}
// task6()
task6Map()


// 4.7. Tik skaičius (number tipo duomenis) ir pridėti tekstą su jų pačių indeksais, pvz.:
// "Index: 0, Number: 2"
// "Index: 1, Number: 3"
// "Index: 2, Number: 5"
// Ir t.t.
function task7() {
    result = []
    for (let i = 0; i < array.length; i++) {
        if (!isNaN(array[i])) {
            result = `<li>Index: ${i}, Number: ${array[i]} </li>`
            toHTML("#task-7", result)
        }
    }

}
function task7Map() {
    result = []
    array.map((num, index) => {
        if (!isNaN(num)) {
            result = `<li>Index: ${index}, Number: ${num} </li>`
            toHTML("#task-7", result)
        }
    })
}
// task7()
task7Map()


// 4.8. Tik skaičius (number tipo duomenis) ir juos padauginti iš jų pačių indekso.
function task8() {
    result = []
    for (let i = 0; i < array.length; i++) {
        if (!isNaN(array[i])) {
            let raisedDegree = array[i]
            raisedDegree = raisedDegree * i
            result = `<li> ${raisedDegree} </li>`
            toHTML("#task-8", result)
        }
    }

}
function task8Map() {
    result = []
    array.map((num, index) => {
        if (!isNaN(num)) {
            let raisedDegree = num
            raisedDegree = raisedDegree * index
            result = `<li> ${raisedDegree} </li>`
            toHTML("#task-8", result)
        }
    })
}
// task8()
task8Map()


// 4.9. Tik skaičius (number tipo duomenis) ir juos padauginti iš ankstesnio nario, pvz.:
// - Pirmo skaičiaus dauginti nereikia.
// - Antrą skaičių dauginti iš pirmo.
// - Trečią skaičių dauginti iš antro.
// - Ketvirta skaičių dauginti iš trečio.
// - Penktą skaičių dauginti iš ketvirto.
// Ir t.t.
function task9() {
    result = []
    string = []
    for (let i = 0; i < array.length; i++) {
        if (!isNaN(array[i])) {
            string.push(array[i])
        }
    }
    for (let i = 0; i < string.length; i++) {
        if (string.length - 1 === i) {

        } else {
            result = `<li> ${string[i + 1]} * ${string[i]} = ${string[i] * string[i + 1]} </li>`
            toHTML("#task-9", result)
        }
    }

}
function task9Map(params) {
    result = []
    string = []
    array.map(num => {
        if (!isNaN(num)) {
            string.push(num)
        }
    })
    string.map((num, index) => {
        if (string.length - 1 === index) {

        } else {
            result = `<li> ${string[index + 1]} * ${num} = ${num * string[index + 1]} </li>`
            toHTML("#task-9", result)
        }
    })
}
// task9()
task9Map()


// 4.10. Tik tuos skaičius (number tipo duomenis), kuriuos padauginus iš 5, atsakymas gaunasi didesnis už 350.
function task10() {
    result = []
    for (let i = 0; i < array.length; i++) {
        if (!isNaN(array[i])) {
            let raisedDegree = array[i]
            raisedDegree = raisedDegree * 5
            if (raisedDegree > 350) {

                result = `<li>${raisedDegree} </li>`
                toHTML("#task-10", result)
            }
        }
    }

}
function task10Map() {
    result = []
    array.map(num => {
        if (!isNaN(num)) {
            let raisedDegree = num
            raisedDegree = raisedDegree * 5
            if (raisedDegree > 350) {
                result = `<li>${raisedDegree} </li>`
                toHTML("#task-10", result)
            }
        }
    })
}
// task10()
task10Map()


// 4.11. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti kiek simbolių jis turi, pvz. "Start has 5 symbols".
function task11() {
    result = []
    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            result = `<li>${array[i]} has ${array[i].length} symbols</li>`
            toHTML("#task-11", result)
        }
    }

}
function task11Map() {
    result = []
    array.map(word => {
        if (isNaN(word)) {
            result = `<li>${word} has ${word.length} symbols</li>`
            toHTML("#task-11", result)
        }
    })
}
// task11()
task11Map()


// 4.12. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio raidę išskiriant brūkšniu ir paverčiant ją didžiąja raide, pvz.: "S-T-A-R-T".
function task12() {
    result = []
    string = []
    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            for (let j = 0; j < array[i].length; j++) {
                string.push(array[i][j]);
            }
            result = `<li>${string.join("-").toUpperCase()}</li>`
            toHTML("#task-12", result)
            string = []
        }
    }
}
function task12Map() {
    result = []
    array.map(word => {
        if (isNaN(word)) {
            let string = word.split("")
            result = `<li>${string.join("-").toUpperCase()}</li>`
            toHTML("#task-12", result)
        }
    })
}
task12()
// task12Map()


// 4.13. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio pirmą ir trečią raidę pakeičiant brūkšniu (underscore), pvz.: "_t_rt";
function task13() {
    result = []
    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            for (let j = 0; j < array[i].length; j++) {
                if (j === 0) {
                    string.push("_")
                } else if (j === 2) {
                    string.push("_")
                } else {
                    string.push(array[i][j]);
                }
            }
            result = `<li>${string.join("")}</li>`
            toHTML("#task-13", result)
            string = []
        }
    }
}
function task13Map() {
    result = []
    array.map(word => {
        if (isNaN(word)) {
            string = word.split("")
            string[0] = "_"
            string[2] = "_"
            result = `<li>${string.join("")}</li>`
            toHTML("#task-13", result)
        }
    })
}
// task13()
task13Map()


// 4.14. Tik tekstą (string tipo duomenis), tačiau žodį parašant atvirkščiai, pvz.: vietoje "start" parašyti "trats";
function task14() {
    result = []
    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            string = array[i].split('')
            string.reverse()
            result = `<li>${string.join("")}</li>`
            toHTML("#task-14", result)
        }
    }
}
function task14Map() {
    result = []
    array.map(word => {
        if (isNaN(word)) {
            string = word.split('')
            string.reverse()
            result = `<li>${string.join("")}</li>`
            toHTML("#task-14", result)
        }
    })
}
// task14()
task14Map()


// 4.15. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti tarp kokių narių masyve jis yra, pvz.: "Word obulys is between -5564 and -51 in the array".
function task15() {
    result = []
    string = []
    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            string.push(array[i])
        }
    }
    for (let i = 0; i < string.length; i++) {
        if (i === 0) {
            result = `<li>Word: (${string[i]}) obulys is between (${string[i + 1]}) in the array</li>`
            toHTML("#task-15", result)

        } else if (i === string.length - 1) {
            result = `<li>Word: (${string[i - 1]}) obulys is between (${string[i]}) in the array</li>`
            toHTML("#task-15", result)
        } else {
            result = `<li>Word: (${string[i]}) obulys is between (${string[i - 1]}) and (${string[i + 1]}) in the array</li>`
            toHTML("#task-15", result)
        }
    }
}
function task15Map() {
    result = []
    string = []
    array.map(word => {
        if (isNaN(word)) {
            string.push(word)
        }
    })
    string.map((word, index) => {
        if (0 === index) {
            result = `<li>Word: (${word}) obulys is between (${string[1]}) in the array</li>`
            toHTML("#task-15", result)

        } else if (index === string.length - 1) {
            result = `<li>Word: (${string[index - 1]}) obulys is between (${word}) in the array</li>`
            toHTML("#task-15", result)
        } else {
            result = `<li>Word: (${word}) obulys is between (${string[index - 1]}) and (${string[index + 1]}) in the array</li>`
            toHTML("#task-15", result)
        }
    })
}
task15()
task15Map()
