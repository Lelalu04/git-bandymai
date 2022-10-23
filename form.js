accArr = [
    objet1 = {
        id: 3,
        firstName: `Jonas`,
        lastName: `Pavardenis`,
        age: `18`,
        phoneNumber: 860456376,
        email: `jonas@gmail.com`,
        knowledge: 5,
        group: `FEU 1 gr.`,
        interest: `C,PHP`
    },
    objet2 = {
        id: 0,
        firstName: `Tomas`,
        lastName: `Tomitijus`,
        age: 25,
        phoneNumber: 8603724376,
        email: `Tomas@gmail.com`,
        knowledge: 5,
        group: `FEU 2 gr.`,
        interest: `C,PHP`
    },
    objet3 = {
        id: 5,
        firstName: `Mantas`,
        lastName: `Mantovicius`,
        age: 80,
        phoneNumber: 866963376,
        email: `Mantas@gmail.com`,
        knowledge: 5,
        group: `FEU 3 gr.`,
        interest: `C,PHP`
    },
    objet4 = {
        id: 2,
        firstName: `Maxas`,
        lastName: `Maxovicios`,
        age: `50`,
        phoneNumber: 860456376,
        email: `Maxas@gmail.com`,
        knowledge: 5,
        group: `FEU 5 gr.`,
        interest: `C,PHP,C++`
    },
    objet5 = {
        id: 1,
        firstName: `Gedas`,
        lastName: `Gedaitis`,
        age: `18`,
        phoneNumber: 860456376,
        email: `Gedas@gmail.com`,
        knowledge: 5,
        group: `FEU 1 gr.`,
        interest: `Python`
    }
]

let id = localStorage.getItem(`id`)

if (id == null) {
    id = 1
    localStorage.setItem(`id`, id)
}

let localStorageStudentData = JSON.parse(localStorage.getItem(`students`))
if (!localStorageStudentData) {

    localStorage.setItem("students", JSON.stringify(accArr))
}

let contactsForm = document.querySelector("#contacts")
let studentsSearchForm = document.querySelector("#students-search-form")

studentsSearchForm.addEventListener(`submit`, (e) => {
    e.preventDefault()
    let search = document.getElementById(`search`)
    console.log(e)
    let searchSelect = document.getElementById(`search-select`)
    let items = document.querySelectorAll(".students-item")
    items.forEach((item) => {
        let li = item.querySelectorAll(`li`)
        let count = 0

        li.forEach((element) => {
            let result = ""
            if (searchSelect.value == 0) {
                if (element.innerText.toLowerCase().includes(search.value.toLowerCase())) {
                    count++
                }
            } else {
                let options = searchSelect.querySelectorAll(`option`)
                options.forEach(option => {
                    if (searchSelect.value === option.value) {
                        result = `${option.textContent}: ${search.value.toLowerCase()}`
                        if (element.innerText.toLowerCase().includes(result.toLowerCase())) {
                            count++
                        }
                    }
                })
            }
        })
        if (count > 0) {
            item.style.display = `block`
        } else {
            item.style.display = `none`
        }
    })
})

localStorageStudentData.map(student => {
    renderSingleStudent(student)
})

function renderSingleStudent(data) {

    let id = data.id
    let firstName = data.firstName
    let lastName = data.lastName
    let age = data.age
    let phoneNumber = data.phoneNumber
    let email = data.email
    let knowledge = data.knowledge
    let group = data.group
    let interest = data.interest

    let ul = document.createElement("ul")
    addLiElement(ul, `ID: ${id}`)
    creatingItem(ul, id, firstName, lastName, age, knowledge, group, interest, email, phoneNumber)
}

contactsForm.addEventListener("submit", (event) => {
    event.preventDefault()

    let group = document.querySelector(`input[name="group"]:checked`).value
    let interests = document.querySelectorAll(`input[type="checkbox"]`)
    id++
    localStorage.setItem(`id`, id)

    let firstName = event.target.elements.firstName.value
    let lastName = event.target.elements.lastName.value
    let age = event.target.elements.age.value
    let phoneNumber = event.target.elements.phoneNumber.value
    let email = event.target.elements.email.value
    let knowledge = event.target.elements.knowledge.value

    let interestCheckeds = []

    interests.forEach(element => {
        if (element.checked) {
            interestCheckeds.push(element.value)
        }
    })

    let inputs = event.target.querySelectorAll(`input.inputFields`)
    let error = event.target.querySelector(`.error`)
    let canAddItem = true
    console.log(inputs)
    inputs.forEach(element => {
        if (element.value === "") {
            alarm(element, `This field is required.`)
            canAddItem = false
        } else if (element.name === `firstName`) {
            if (element.value.length < 3) {
                alarm(element, 'First name is too short. At least 3 symbols is required.')
                canAddItem = false
            } else {
                cleanInput(element)
            }
        } else if (element.name === `lastName`) {
            if (element.value.length < 3) {
                alarm(element, 'Last name is too short. At least 3 symbols is required.')
                canAddItem = false
            } else {
                cleanInput(element)
            }
        } else if (element.name === `age`) {
            if (element.value > 120) {
                alarm(element, 'Age cannot be more then 120 years.')
                canAddItem = false
            } else if (element.value < 0) {
                alarm(element, 'Age cannot be a negative number.')
                canAddItem = false
            } else {
                cleanInput(element)
            }
        } else if (element.name === 'phoneNumber') {
            if (element.value.length < 9 || element.value.length > 12) {
                canAddItem = false;
                alarm(element, 'Phone number is invalid.');
            } else {
                cleanInput(element)
            }
        } else if (element.name === `email`) {
            if (element.value.length < 9 || !element.value.includes(`@`) || !element.value.includes(`.`)) {
                alarm(element, 'Email address is invalid.')
                canAddItem = false
            } else {
                cleanInput(element)
            }
        }

    })

    if (canAddItem === true) {
        let ul = document.createElement("ul")
        ul.textContent = "ID: " + id
        creatingItem(ul, firstName, lastName, age, knowledge, group, interestCheckeds, email, phoneNumber)
        warningBox(error, `Created: ${firstName}`, `rgb(10, 180, 180)`)

    } else {
        warningBox(error,`Some fields are missing...`, `red`)
    }




    let localStorageStudentData = JSON.parse(localStorage.getItem(`students`))
    let object = {
        id,
        firstName,
        lastName,
        age,
        phoneNumber,
        email,
        knowledge,
        group,
        interest: interestCheckeds
    }
    localStorageStudentData.push(object)
    localStorage.setItem(`students`, JSON.stringify(localStorageStudentData))

    contactsForm.reset()

    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('age');
    localStorage.removeItem('phoneNumber');
    localStorage.removeItem('email');
    localStorage.removeItem('knowledge');
    localStorage.removeItem('group');
    localStorage.removeItem('it-program');

})
function creatingItem(ul, firstName, lastName, age, knowledge, group, interest, email, phoneNumber) {

    addLiElement(ul, `First name: ${firstName}`)
    addLiElement(ul, `Last name: ${lastName}`)
    addLiElement(ul, `Age: ${age}`)

    let phoneElement = document.createElement('li');
    phoneElement.innerHTML = `<strong>Phone:</strong> <span class="hidden-area">****</span>`;
    ul.append(phoneElement)

    let emailElement = document.createElement('li');
    emailElement.innerHTML = `<strong>Email:</strong> <span class="hidden-area">****</span>`;
    ul.append(emailElement)

    addLiElement(ul, `Knowledge: ${knowledge}`)
    addLiElement(ul, `Group: ${group}`)
    addLiElement(ul, `Interests: ${interest}`)

    let studentsItem = document.createElement("div")
    studentsItem.setAttribute("class", "students-item")

    let studentsList = document.querySelector(".students-list")

    let removeItem = document.createElement("button")
    removeItem.classList = "button remove-button"
    removeItem.textContent = `Remove`

    let buttonShowNumber = document.createElement("button")
    buttonShowNumber.classList = "button item-button"
    buttonShowNumber.textContent = "Show"

    studentsItem.append(ul, buttonShowNumber, removeItem)
    studentsList.prepend(studentsItem)

    let removeButton = document.querySelector(`.remove-button`)
    removeButton.addEventListener(`click`, () => {
        studentsItem.remove()
    })

    let buttonShow = document.querySelector('.item-button')
    let dataHidden = true;
    buttonShow.addEventListener("click", () => {
        let privateEmail = emailElement.querySelector('.hidden-area');
        let privatePhone = phoneElement.querySelector('.hidden-area');

        if (dataHidden) {
            privateEmail.textContent = email
            privatePhone.textContent = phoneNumber;

        } else {
            privateEmail.textContent = "****"
            privatePhone.textContent = "****"
        }
        dataHidden = !dataHidden;
    })
}

function addLiElement(ul, text) {
    let li = document.createElement("li")
    li.textContent = text
    ul.append(li)

}

function cleanInput(element) {
    element.style.borderColor = `rgb(10, 180, 180)`
    element.placeholder = ``
}

function warningBox(error, text, color) {
    error.textContent = text
        error.style.color = color
        setTimeout(() => {
            error.textContent = ``
        }, 5000);
}

function alarm(element, text) {
    element.placeholder = text
    element.style.borderColor = `red`
}

function formDatainLocalStorage(form) {

    let localFirstName = localStorage.getItem(`firstName`)
    let localLastName = localStorage.getItem(`lastName`)
    let localAge = localStorage.getItem(`age`)
    let localPhoneNumber = localStorage.getItem(`phoneNumber`)
    let localEmail = localStorage.getItem(`email`)
    let localItKnowledge = localStorage.getItem(`knowledge`)
    let localGroup = localStorage.getItem(`group`)
    let localInterests = JSON.parse(localStorage.getItem(`it-program`))


    let inputFirstName = form.elements.firstName
    let inputLastName = form.elements.lastName
    let inputAge = form.elements.age
    let inputPhoneNumber = form.elements.phoneNumber
    let inputEmail = form.elements.email
    let inputItKnowledge = form.elements.knowledge
    let inputgroup = form.elements[`group`]

    inputFirstName.value = localFirstName
    inputLastName.value = localLastName
    inputAge.value = localAge
    inputPhoneNumber.value = localPhoneNumber
    inputEmail.value = localEmail
    inputItKnowledge.value = localItKnowledge
    console.log(inputItKnowledge.value)
    inputgroup.value = localGroup
    if (localInterests) {
        localInterests.map(element => {
            let interestElement = document.querySelector(`[value="${element}"]`);
            if (interestElement) {
                interestElement.checked = true;
            }
        })
    }

    form.addEventListener('input', (event) => {
        let activeInput = event.target;
        let inputName = activeInput.name;
        let inputValue = activeInput.value;
        localStorage.setItem(inputName, inputValue);
        let formInterests = document.querySelectorAll('[name="it-program"]:checked');
        let interestValues = [];
        formInterests.forEach(interest => {
            interestValues.push(interest.value);
        });
        localStorage.setItem('it-program', JSON.stringify(interestValues));
    })
}

formDatainLocalStorage(contactsForm)