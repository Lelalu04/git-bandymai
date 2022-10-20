let objectCities1 = {}
objectCities1.name = "Kaunas"
objectCities1.population = 80000
objectCities1.location = {}
objectCities1.location.continent = "Europa"
objectCities1.location.country = "Lietuva"
objectCities1.touristAttractions = ["neziniukas1", "ziniukas1"]
objectCities1.isCapital = false

let objectCities2 = {}
objectCities2.name = "Vilnius"
objectCities2.population = 100000
objectCities2.location = {}
objectCities2.location.continent = "Europa"
objectCities2.location.country = "Lietuva"
objectCities2.touristAttractions = ["neziniukas2", "ziniukas2"]
objectCities2.isCapital = true

let objectCities3 = {}
objectCities3.name = "Kaunas3"
objectCities3.population = 4534732
objectCities3.location = {}
objectCities3.location.continent = "Europa3"
objectCities3.location.country = "Lietuva3"
objectCities3.touristAttractions = ["neziniukas3", "ziniukas3"]
objectCities3.isCapital = false

let objectCities4 = {}
objectCities4.name = "Kaunas3"
objectCities4.population = 73289
objectCities4.location = {}
objectCities4.location.continent = "Europa4"
objectCities4.location.country = "Lietuva4"
objectCities4.touristAttractions = ["neziniukas4", "ziniukas4"]
objectCities4.isCapital = false

let objectCities5 = {}
objectCities5.name = "Kaunas4"
objectCities5.population = 3573543
objectCities5.location = {}
objectCities5.location.continent = "Europa5"
objectCities5.location.country = "Lietuva5"
objectCities5.touristAttractions = ["neziniukas5", "ziniukas5"]
objectCities5.isCapital = false

let objectCities6 = {}
objectCities6.name = "Kaunas6"
objectCities6.population = 35643532
objectCities6.location = {}
objectCities6.location.continent = "Europa6"
objectCities6.location.country = "Lietuva6"
objectCities6.touristAttractions = ["neziniukas6", "ziniukas6"]
objectCities6.isCapital = true

let objectCities7 = {}
objectCities7.name = "Kaunas7"
objectCities7.population = 73543453
objectCities7.location = {}
objectCities7.location.continent = "Europa7"
objectCities7.location.country = "Lietuva7"
objectCities7.touristAttractions = ["neziniukas7", "ziniukas7"]
objectCities7.isCapital = false

let objectCities8 = {}
objectCities8.name = "Kaunas"
objectCities8.population = 213453
objectCities8.location = {}
objectCities8.location.continent = "Europa8"
objectCities8.location.country = "Lietuva"
objectCities8.touristAttractions = ["neziniukas8", "ziniukas8"]
objectCities8.isCapital = true

let objectCities9 = {}
objectCities9.name = "Kaunas9"
objectCities9.population = 364578
objectCities9.location = {}
objectCities9.location.continent = "Europa9"
objectCities9.location.country = "Lietuva9"
objectCities9.touristAttractions = ["neziniukas9", "ziniukas9"]
objectCities9.isCapital = true

let objectCities10 = {}
objectCities10.name = "Kaunas"
objectCities10.population = 7365435
objectCities10.location = {}
objectCities10.location.continent = "Europa10"
objectCities10.location.country = "Lietuva10"
objectCities10.touristAttractions = ["neziniukas10", "ziniukas10"]
objectCities10.isCapital = false

let cities = [objectCities1, objectCities2, objectCities3, objectCities4, objectCities5, objectCities6, objectCities7, objectCities8, objectCities9, objectCities10]
console.log(cities)

let cities2 = [
    {
        name: "Kaunas",
        population: 80000,
        location: {
            continent: "Europa",
            country: "Lietuva",
        },
        touristAttractions: ["neziniukas1", "ziniukas1"],
        isCapital: false,
    },
    {
        name: "Vilnius",
        population: 100000,
        location: {
            continent: "Europa",
            country: "Lietuva",
        },
        touristAttractions: ["neziniukas2"],
        isCapital: true,
    },
    {
        name: "Kaunas3",
        population: 4534732,
        location: {
            continent: "Europa3",
            country: "Lietuva3",
        },
        touristAttractions: ["neziniukas3", "ziniukas3"],
        isCapital: false,
    },
    {
        name: "Kaunas4",
        population: 73289,
        location: {
            continent: "Europa4",
            country: "Lietuva4",
        },
        touristAttractions: ["neziniukas4", "ziniukas4"],
        isCapital: false,
    },
    {
        name: "Kaunas5",
        population: 3573543,
        location: {
            continent: "Europa5",
            country: "Lietuva5",
        },
        touristAttractions: ["neziniukas5", "ziniukas5"],
        isCapital: false,
    },
    {
        name: "Kaunas6",
        population: 35643532,
        location: {
            continent: "Europa6",
            country: "Lietuva6",
        },
        touristAttractions: ["neziniukas6", "ziniukas6"],
        isCapital: true,
    },
    {
        name: "Kaunas7",
        population: 73543453,
        location: {
            continent: "Europa7",
            country: "Lietuva7",
        },
        touristAttractions: ["neziniukas7", "ziniukas7"],
        isCapital: false,
    },
    {
        name: "Kaunas8",
        population: 213453,
        location: {
            continent: "Europa8",
            country: "Lietuva",
        },
        touristAttractions: ["neziniukas8", "ziniukas88", "neziniukas888", "ziniukas8", "neziniukas8888", "ziniukas8"],
        isCapital: true,
    },
    {
        name: "Kaunas9",
        population: 364578,
        location: {
            continent: "Europa9",
            country: "Lietuva9",
        },
        touristAttractions: ["neziniukas9", "ziniukas9"],
        isCapital: true,
    },
    {
        name: "Kaunas10",
        population: 7365435,
        location: {
            continent: "Europa10",
            country: "Lietuva10",
        },
        touristAttractions: [],
        isCapital: false,
    }
]
console.log(...cities2)
cities2.map(city => {
    console.log(city.name)
})
cities2.map(city => {
    console.log(`${city.name} => ${city.population}`)
})
cities2.map(city => {
    console.log(`${city.name} => ${city.location.continent}`)
})
cities2.map(city => {
    console.log(`${city.name} => ${city.location.country}`)
})
cities2.map(city => {
    console.log(`${city.name} => ${city.isCapital}`)
})
cities2.map(city => {
    let result = []
    city.touristAttractions.map(touristAttractions => {
        result.push(`${touristAttractions} `)
    })
    console.log(`${city.name} => ${result}`)
})

function toHTML(cities2) {
    cities2.map(city => {

        let { name, population, isCapital, touristAttractions } = city
        let { continent, country } = city.location

        let result = ""
        let paragraph = ""
        let touristAttractionsString = ""
        let placeOfInterest = ""
        let capital = ""

        if (isCapital) {
            result = `(${isCapital})`
            paragraph = `${city.name} is the capital of ${country}.`
            capital = "capital"
        }

        touristAttractions.map(attraction => {
            let touristAttrac = attraction
            placeOfInterest += `<li>${touristAttrac}</li>`
        })

        if (touristAttractions.length === 1) {
            touristAttractionsString = `<h4>Main Tourist attraction of ${name} is</h4>
            <ul> ${placeOfInterest}</ul>`
        } else if (touristAttractions.length > 1) {
            touristAttractionsString = `
            <h4>Main Tourist attractions of ${name} are </h4><ul>
            ${placeOfInterest}</ul>`
        }
        
        let cityItem = `<div class="city-item ${capital}"> 
                        <h2 class="city-name">${city.name} ${result}</h2>
                        <p>${name} city is located in ${continent}, ${country} and has population of ${population} people. ${paragraph} </p>
                        ${touristAttractionsString}
                        </div>`
        let listArray = document.querySelector("body")
        listArray.innerHTML += cityItem
    })
}
toHTML(cities2)

function changeCapitalColor() {
    let elementisCapital = document.querySelectorAll(".capital")
    console.log(elementisCapital)
    elementisCapital.forEach(element => {
        element.style.color = "red"
    })
}
changeCapitalColor()

function changeEverySecondBackgroundColor() {
    let elementisCityName = document.querySelectorAll(".city-item:nth-child(even)")
    let count = 0
    elementisCityName.forEach(element => {

        element.style.backgroundColor = "blue"
        console.log(element)
    })

}
changeEverySecondBackgroundColor()

let elementTouristAttractionsul = document.querySelectorAll("ul")
let elementTouristAttractionsli = document.querySelector("li")
elementTouristAttractionsul.forEach(element => {
    element.style.color = "green"
})