accArr = [
    objet1 = {
        id: 3,
        firstName: `Jonas`,
        lastName: `Pavardenis`,
        age: `18`,
        phoneNumber: 860456376,
        email: `jonas@gmail.com`,
        radio: 5,
        group: `FEU 1 gr.`,
        range: `C,PHP`
    },
    objet2 = {
        id: 0,
        firstName: `Tomas`,
        lastName: `Tomitijus`,
        age: 25,
        phoneNumber: 8603724376,
        email: `Tomas@gmail.com`,
        radio: 5,
        group: `FEU 2 gr.`,
        range: `C,PHP`
    },
    objet3 = {
        id: 5,
        firstName: `Mantas`,
        lastName: `Mantovicius`,
        age: 80,
        phoneNumber: 866963376,
        email: `Mantas@gmail.com`,
        radio: 5,
        group: `FEU 3 gr.`,
        range: `C,PHP`
    },
    objet4 = {
        id: 2,
        firstName: `Maxas`,
        lastName: `Maxovicios`,
        age: `50`,
        phoneNumber: 860456376,
        email: `Maxas@gmail.com`,
        radio: 5,
        group: `FEU 5 gr.`,
        range: `C,PHP,C++`
    },
    objet5 = {
        id: 1,
        firstName: `Gedas`,
        lastName: `Gedaitis`,
        age: `18`,
        phoneNumber: 860456376,
        email: `Gedas@gmail.com`,
        radio: 5,
        group: `FEU 1 gr.`,
        range: `Python`
    }
]

localStorage.setItem("students",JSON.stringify(accArr))
let localStorageStudentData = JSON.parse(localStorage.getItem(`students`))
localStorageStudentData.map(student => {
    console.log(student.id)
})

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
            if(searchSelect.value == 0){
                if(element.innerText.toLowerCase().includes(search.value.toLowerCase())){
                    count++
                } 
            } else{
                let options = searchSelect.querySelectorAll(`option`)
                options.forEach(option => {
                    if(searchSelect.value === option.value){
                        result = `${option.textContent}: ${search.value.toLowerCase()}`
                        if(element.innerText.toLowerCase().includes(result.toLowerCase())){
                            count++
                        }    
                    }
                })
            }
        })
        if(count > 0){
            item.style.display = `block`
        } else{
            item.style.display = `none`
        }
    })
})

localStorageStudentData.map(student => {
    renderSingleStudent(student)
  
})

function renderSingleStudent(data){
    
    let id = data.id
    let firstName = data.firstName
    let lastName = data.lastName
    let age = data.age
    let phoneNumber = data.phoneNumber
    let email = data.email
    let group = data.group
    let radio = data.radio
    let range = data.range
 

    let ul = document.createElement("ul")

    addLiElement(ul, `ID: ${id}`)
    addLiElement(ul, `First name: ${firstName}`)
    addLiElement(ul, `Last name: ${lastName}`)
    addLiElement(ul, `Age: ${age}`)
    
    let phoneElement = document.createElement('li');
    phoneElement.innerHTML = `<strong>Phone:</strong> <span class="hidden-area">****</span>`;
    ul.append(phoneElement)

    let emailElement = document.createElement('li');
    emailElement.innerHTML = `<strong>Email:</strong> <span class="hidden-area">****</span>`;
    ul.append(emailElement)
    
    addLiElement(ul, `Knowledge: ${radio}`)
    addLiElement(ul, `Group: ${group}`)
    addLiElement(ul, `Interests: ${range}`)
    
    let studentsItem = document.createElement("div")
studentsItem.setAttribute("class", "students-item")

let studentsList = document.querySelector(".students-list")
    
let buttonShowNumber = document.createElement("button")
buttonShowNumber.classList = "button item-button"
buttonShowNumber.textContent = "Show"

studentsItem.append(ul,buttonShowNumber)
studentsList.prepend(studentsItem)

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

let id = 1
let rangeLabel = document.querySelector("#knowledgeLabel")
let pointsInput = document.querySelector("#knowledge")
pointsInput.addEventListener("input", () => {
    rangeLabel.textContent = `Knowledge: ${pointsInput.value}`
})



contactsForm.addEventListener("submit", (event) => {
    event.preventDefault()
    
    let radioInput = document.querySelector(`input[name="radio"]:checked`)
    let checkbox = document.querySelectorAll(`input[type="checkbox"]`)
    
    let firstName = event.target.elements.firstName.value
    let lastName = event.target.elements.lastName.value
    let age = event.target.elements.age.value
    let phoneNumber = event.target.elements.phoneNumber.value
    let email = event.target.elements.email.value
    let knowledge = event.target.elements.knowledge.value
 
    let checkboxCheckeds = []
    

            
    checkbox.forEach(element => {
        if (element.checked) {
        checkboxCheckeds.push(element.value)
        }
    })
    
    let ul = document.createElement("ul")
    ul.textContent = "ID: " + id
    addLiElement(ul, `First name: ${firstName}`)
    addLiElement(ul, `Last name: ${lastName}`)
    addLiElement(ul, `Age: ${age}`)
    id++
    
    let phoneElement = document.createElement('li');
    phoneElement.innerHTML = `<strong>Phone:</strong> <span class="hidden-area">****</span>`;
    ul.append(phoneElement)

    let emailElement = document.createElement('li');
    emailElement.innerHTML = `<strong>Email:</strong> <span class="hidden-area">****</span>`;
    ul.append(emailElement)
    
    addLiElement(ul, `Knowledge: ${knowledge}`)
    addLiElement(ul, `Group: ${radioInput.value}`)
    addLiElement(ul, `Interests: ${checkboxCheckeds}`)
    
    rangeLabel.textContent = `Knowledge: ${pointsInput.value = 5} `
    
    
    
    // let studentResult = document.querySelector(".students-result")
    // studentResult.replaceChildren();

        // cl
    // }
    
    let buttonShowNumber = document.createElement("button")
    buttonShowNumber.classList = "button item-button"
    buttonShowNumber.textContent = "Show"
    
    
    let studentsItem = document.createElement("div")
    studentsItem.setAttribute("class", "students-item")
    
    studentsItem.append(ul, buttonShowNumber)

        let studentsList = document.querySelector(".students-list")
    // studentsItem.append(div)
    // div.append(ul, buttonShowNumber)
    // let studentResultDiv = document.querySelector(".student-result")

    
    // $(".students-result").appendTo(".students-item");
    // studentsItem.
    studentsList.prepend(studentsItem)
    if (id > 2){
        // studentsList.prepend(studentResultDiv)
    } 
   
    let buttonShow = document.querySelector('.item-button')
    let dataHidden = true;
    // console.log(phoneNumber.value)
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

//     localStorage.setItem("students",JSON.stringify(accArr))
// console.log(JSON.parse(localStorage.getItem(`students`)))
// let localStorageStudentData = JSON.parse(localStorage.getItem(`students`))
// localStorageStudentData.map(student => {
//     console.log(student.id)
// })


    contactsForm.reset()
    // localStorage.getItem()

    let localStorageStudentData = JSON.parse(localStorage.getItem(`students`))
    // addStudentToStorage
    console.log(localStorageStudentData)
let object = {
}
object.id = id
object.firstName = localStorage.getItem('firstName');
object.lastName = localStorage.getItem('lastName');
object.age = localStorage.getItem('age');
object.phoneNumber = localStorage.getItem('phoneNumber');
object.email = localStorage.getItem('email');
object.knowledge = localStorage.getItem('knowledge');
object.group = localStorage.getItem('radio');
object.radio = localStorage.getItem('it-program');

localStorageStudentData.push(object)

console.log(localStorageStudentData)
localStorage.setItem(`students`, JSON.stringify(localStorageStudentData))

console.log(object.firstName)
    // event.target.reset();
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('age');
    localStorage.removeItem('phoneNumber');
    localStorage.removeItem('email');
    localStorage.removeItem('knowledge');
    localStorage.removeItem('radio');
    localStorage.removeItem('it-program');

})
function populateRadioInput(elements) {
let oldStorageValue = localStorage.getItem(`group`)
document.getElementById(oldStorageValue).checked = true

    elements.forEach(element => {
        element.addEventListener(`input`, () => {
            localStorage.setItem(element.name, element.id)

console.log(element)
        })
    })
}

// populateRadioInput(radioInput)

function addLiElement(ul, text ) {
    let li = document.createElement("li")
    li.textContent = text
    ul.append(li)

}

function formDatainLocalStorage(form) {
    let localFirstName = localStorage.getItem(`firstName`)
    let localLastName = localStorage.getItem(`lastName`)
    let localAge = localStorage.getItem(`age`)
    let localPhoneNumber = localStorage.getItem(`phoneNumber`)
    let localEmail = localStorage.getItem(`email`)
    let localItKnowledge = localStorage.getItem(`knowledge`)
    let localGroup = localStorage.getItem(`radio`)
    let localInterests = JSON.parse(localStorage.getItem(`it-program`))

    
    let inputFirstName = form.elements.firstName
    let inputLastName = form.elements.lastName
    let inputAge = form.elements.age
    let inputPhoneNumber = form.elements.phoneNumber
    let inputEmail = form.elements.email
    let inputItKnowledge = form.elements.knowledge
    let inputgroup = form.elements[`radio`]


    inputFirstName.value = localFirstName
    inputLastName.value = localLastName
    inputAge.value = localAge
    inputPhoneNumber.value = localPhoneNumber
    inputEmail.value = localEmail
    inputItKnowledge.value = localItKnowledge
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















// geriausias varijantas 

// let contactsForm = document.querySelector("form")
// let id = 1
// let rangeLabel = document.querySelector("#rangeLabel")
// let pointsInput = document.querySelector("#range")
// let shownumber = false
// pointsInput.addEventListener("input", () => {
//     rangeLabel.textContent = `Knowledge: ${pointsInput.value}`
// })

// let studentsItem = document.createElement("div")
// studentsItem.setAttribute("class", "students-item")
// let studentsList = document.createElement("div")
// studentsList.setAttribute("class", "students-list")

// contactsForm.addEventListener("submit", (event) => {
//     event.preventDefault()
    
//     let radioInput = document.querySelector(`input[name="radio"]:checked`)
//     let checkbox = document.querySelectorAll(`input[type="checkbox"]`)
    
//     let firstName = event.target.elements.firstName.value
//     let lastName = event.target.elements.lastName.value
//     let age = event.target.elements.age.value
//     let phoneNumber = event.target.elements.phoneNumber.value
//     let email = event.target.elements.email.value
//     let range = event.target.elements.range.value
 
//     let checkboxCheckeds = []
    
            
//     checkbox.forEach(element => {
//         if (element.checked) {
//         checkboxCheckeds.push(element.value)
//         }
//     })
//     let studentsInfo = document.querySelector(".students-info")

//     let ul = document.createElement("ul")
//     ul.textContent = "ID: " + id
//     addLiElement(ul, `First name: ${firstName}`)
//     addLiElement(ul, `Last name: ${lastName}`)
//     addLiElement(ul, `Age: ${age}`)
//     id++
    
//     let phoneElement = document.createElement('li');
//     phoneElement.innerHTML = `<strong>Phone:</strong> <span class="hidden-area">****</span>`;
//     ul.append(phoneElement)

//     let emailElement = document.createElement('li');
//     emailElement.innerHTML = `<strong>Email:</strong> <span class="hidden-area">****</span>`;
//     ul.append(emailElement)
    
//     addLiElement(ul, `Knowledge: ${range}`)
//     addLiElement(ul, `Group: ${radioInput.value}`)
//     addLiElement(ul, `Interests: ${checkboxCheckeds}`)
    
//     rangeLabel.textContent = `Knowledge: ${pointsInput.value = 5} `
    
    
    
//     let div = document.createElement("div")
//     div.className = "student-result"
    
//     let buttonShowNumber = document.createElement("button")
//     buttonShowNumber.classList = "button item-button"
//     buttonShowNumber.textContent = "Show"
    
    
//     if (id === 2){
//         studentsInfo.append(studentsItem)

//     }
//     studentsItem.append(div)
//     div.append(ul, buttonShowNumber)
//     let studentResultDiv = document.querySelector(".student-result")

//     if(id === 3){
//         studentsInfo.append(studentsList)
//     }

//     if (id > 2){
//         studentsList.prepend(studentResultDiv)
//     } 
   
//     let buttonShow = document.querySelector('.item-button')
//     let dataHidden = true;
//     console.log(phoneNumber.value)
//     buttonShow.addEventListener("click", () => {
//         let privateEmail = emailElement.querySelector('.hidden-area');
//         let privatePhone = phoneElement.querySelector('.hidden-area');
        
//         if (dataHidden) {
//             privateEmail.textContent = email
//             privatePhone.textContent = phoneNumber;
        
//         } else {
//             privateEmail.textContent = "****"
//             privatePhone.textContent = "****"
     
//         }
//         dataHidden = !dataHidden;
      
        
//     })
//     contactsForm.reset()
//     // event.target.reset();
//     localStorage.removeItem('firstName');
//     localStorage.removeItem('lastName');
//     localStorage.removeItem('age');
//     localStorage.removeItem('phoneNumber');
//     localStorage.removeItem('email');
//     localStorage.removeItem('range');
//     localStorage.removeItem('radio');
//     localStorage.removeItem('it-program');

// })
// function populateRadioInput(elements) {
// let oldStorageValue = localStorage.getItem(`group`)
// document.getElementById(oldStorageValue).checked = true

//     elements.forEach(element => {
//         element.addEventListener(`input`, () => {
//             localStorage.setItem(element.name, element.id)

// console.log(element)
//         })
//     })
// }

// // populateRadioInput(radioInput)

// function addLiElement(ul, text ) {
//     let li = document.createElement("li")
//     li.textContent = text
//     ul.append(li)

// }

// function formDatainLocalStorage(form) {
//     let localFirstName = localStorage.getItem(`firstName`)
//     let localLastName = localStorage.getItem(`lastName`)
//     let localAge = localStorage.getItem(`age`)
//     let localPhoneNumber = localStorage.getItem(`phoneNumber`)
//     let localEmail = localStorage.getItem(`email`)
//     let localItKnowledge = localStorage.getItem(`range`)
//     let localGroup = localStorage.getItem(`radio`)
//     let localInterests = JSON.parse(localStorage.getItem(`it-program`))

//     console.log(localInterests)
//     let inputFirstName = form.elements.firstName
//     let inputLastName = form.elements.lastName
//     let inputAge = form.elements.age
//     let inputPhoneNumber = form.elements.phoneNumber
//     let inputEmail = form.elements.email
//     let inputItKnowledge = form.elements.range
//     let inputgroup = form.elements[`radio`]


//     inputFirstName.value = localFirstName
//     inputLastName.value = localLastName
//     inputAge.value = localAge
//     inputPhoneNumber.value = localPhoneNumber
//     inputEmail.value = localEmail
//     inputItKnowledge.value = localItKnowledge
//     inputgroup.value = localGroup
//     if (localInterests) {
//     localInterests.map(element => {
//         let interestElement = document.querySelector(`[value="${element}"]`);
//         if (interestElement) {
//         interestElement.checked = true;
//             }
//         })
//     }

//     form.addEventListener('input', (event) => {
//             let activeInput = event.target;
//             let inputName = activeInput.name;
//             let inputValue = activeInput.value;
//             localStorage.setItem(inputName, inputValue);
//             let formInterests = document.querySelectorAll('[name="it-program"]:checked');
//                 let interestValues = [];
//                 formInterests.forEach(interest => {
//                   interestValues.push(interest.value);
//                 });
//                 localStorage.setItem('it-program', JSON.stringify(interestValues));

//         })


// }

// formDatainLocalStorage(contactsForm)
















// // let form = document.querySelector('form');
// // form.addEventListener('submit', (event) => {
// //   event.preventDefault();
// //   let name = document.querySelector('#name').value;
// //   let age = document.querySelector('input[name=age]');
// //   console.dir(name);
// // });
// // let studentForm = document.getElementById('student-form');
// let studentForm = document.querySelector('#student-form');
// let studentsList = document.querySelector('#students-list');
// function changeRangeOutput() {
//   let itKnowledgeInput = document.querySelector('#student-it-knowledge');
//   let itKnowledgeOutput = document.querySelector('#it-knowledge-output');
//   itKnowledgeInput.addEventListener('input', () => {
//     itKnowledgeOutput.textContent = itKnowledgeInput.value;
//   });
// }
// changeRangeOutput();
// studentForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   // let name = document.querySelector('#student-name').value;
//   // let surname = document.getElementById('student-surname').value;
//   // let age = document.querySelector('[name="age"]').value;
//   // let phone = document.getElementsByName('phone')[0].value;
//   // let email = studentForm.querySelector('#student-email').value;
//   // let name = event.target.elements.name.value;
//   // let surname = event.target.elements.surname.value;
//   // let age = event.target.elements.age.value;
//   // let phone = event.target.elements.phone.value;
//   // // let email = event.target.elements['student-email'].value;
//   // let email = event.target.elements.email.value;
//   let elements = event.target.elements;
//   let name = elements.name.value;
//   let surname = elements.surname.value;
//   let age = elements.age.value;
//   let phone = elements.phone.value;
//   // let email = elements['student-email'].value;
//   let email = elements.email.value;
//   let itKnowledge = elements['it-knowledge'].value;
//   // let group = document.querySelector('[name="group"]:checked');
//   let group = elements.group.value;
//   let interests = document.querySelectorAll('[name="interest"]:checked');
//   let inputErrorMessages = event.target.querySelectorAll('.input-error-message');
//   inputErrorMessages.forEach(message => message.remove());
//   let requiredInputs = event.target.querySelectorAll('.required');
//   let formIsValid = true;
//   requiredInputs.forEach(input => {
//     input.classList.remove('input-error');
//     if (!input.value) {
//       formIsValid = false;
//       checkInputData(input, 'This field is required.');
//     } else if (input.name === 'name') {
//       if (input.value.length < 3) {
//         formIsValid = false;
//         let errorText = 'Name is too short. At least 3 symbols is required.'
//         checkInputData(input, errorText);
//         // let inputErrorMessage = document.createElement('span');
//         // inputErrorMessage.classList.add('input-error-message', 'color-red');
//         // input.classList.add('input-error');
//         // input.after(inputErrorMessage);
//         // inputErrorMessage.textContent = 'Name is too short. At least 3 symbols is required.';
//       }
//     } else if (input.name === 'surname') {
//       if (input.value.length < 3) {
//         formIsValid = false;
//         checkInputData(input, 'Surname is too short. At least 3 symbols is required.');
//         // let inputErrorMessage = document.createElement('span');
//         // inputErrorMessage.classList.add('input-error-message', 'color-red');
//         // input.classList.add('input-error');
//         // input.after(inputErrorMessage);
//         // inputErrorMessage.textContent = 'Surname is too short. At least 3 symbols is required.';
//       }
//     } else if (input.name === 'phone') {
//       if (input.value.length < 9 || input.value.length > 12) {
//         formIsValid = false;
//         checkInputData(input, 'Phone number is invalid.');
//         // let inputErrorMessage = document.createElement('span');
//         // inputErrorMessage.classList.add('input-error-message', 'color-red');
//         // input.classList.add('input-error');
//         // input.after(inputErrorMessage);
//         // inputErrorMessage.textContent = 'Phone number is invalid.';
//       }
//     } else if (input.name === 'age') {
//       if (input.value < 0) {
//         formIsValid = false;
//         checkInputData(input, 'Age cannot be a negative number.');
//         // let inputErrorMessage = document.createElement('span');
//         // inputErrorMessage.classList.add('input-error-message', 'color-red');
//         // input.classList.add('input-error');
//         // input.after(inputErrorMessage);
//         // inputErrorMessage.textContent = 'Age cannot be a negative number.';
//       } else if (input.value > 120) {
//         formIsValid = false;
//         checkInputData(input, 'Age cannot be more then 120 years.');
//         // let inputErrorMessage = document.createElement('span');
//         // inputErrorMessage.classList.add('input-error-message', 'color-red');
//         // input.classList.add('input-error');
//         // input.after(inputErrorMessage);
//         // inputErrorMessage.textContent = 'Age cannot be more then 120 years.';
//       }
//     } else if (input.name === 'email') {
//       if (input.value.length < 9 || !input.value.includes('@') || !input.value.includes('.')) {
//         formIsValid = false;
//         checkInputData(input, 'Email is incorrect.');
//         // let inputErrorMessage = document.createElement('span');
//         // inputErrorMessage.classList.add('input-error-message', 'color-red');
//         // input.classList.add('input-error');
//         // input.after(inputErrorMessage);
//         // inputErrorMessage.textContent = 'Email is incorrect.';
//       }
//     }
//   });
//   if (!formIsValid) {
//     let errorMessage = 'Some fields are missing...';
//     renderAlertMessage(errorMessage, 'color-red');
//     return;
//   }
//   let studentItem = document.createElement('div');
//   studentItem.classList.add('student-item');
//   let nameElement = document.createElement('p');
//   nameElement.innerHTML = `<strong>Name:</strong> ${name}`;
//   let surnameElement = document.createElement('p');
//   surnameElement.innerHTML = `<strong>Surname:</strong> ${surname}`;
//   let ageElement = document.createElement('p');
//   ageElement.innerHTML = `<strong>Age:</strong> ${age}`;
//   let emailElement = document.createElement('p');
//   emailElement.innerHTML = `<strong>Email:</strong> <span class="hidden-area">****</span>`;
//   let phoneElement = document.createElement('p');
//   phoneElement.innerHTML = `<strong>Phone:</strong> <span class="hidden-area">****</span>`;
//   let itKnowledgeElement = document.createElement('p');
//   itKnowledgeElement.innerHTML = `<strong>IT knowledge:</strong> ${itKnowledge}`;
//   let groupElement = document.createElement('p');
//   groupElement.innerHTML = `<strong>Group:</strong> ${group}`;
//   let interestWrapperElement = document.createElement('div');
//   interestWrapperElement.classList.add('interest-wrapper');
//   let interestTitleElement = document.createElement('h3');
//   interestTitleElement.textContent = 'Interests:';
//   let interestListElement = document.createElement('ul');
//   interests.forEach(interest => {
//     let interestItem = document.createElement('li');
//     interestItem.textContent = interest.value;
//     interestListElement.append(interestItem);
//   });
//   interestWrapperElement.append(interestTitleElement, interestListElement);
//   let privateInfoButton = document.createElement('button');
//   privateInfoButton.textContent = 'Show personal info';
//   privateInfoButton.classList.add('private-info-button', 'show');
//   // privateInfoButton.addEventListener('click', () => {
//   //   let privateEmail = emailElement.querySelector('.hidden-area');
//   //   let privatePhone = phoneElement.querySelector('.hidden-area');
//   //   if (privateInfoButton.classList.contains('show')) {
//   //     privateEmail.textContent = email;
//   //     privatePhone.textContent = phone;
//   //     privateInfoButton.textContent = 'Hide personal info';
//   //   } else {
//   //     privateEmail.textContent = '****';
//   //     privatePhone.textContent = '****';
//   //     privateInfoButton.textContent = 'Show personal info';
//   //   }
//   //   privateInfoButton.classList.toggle('show');
//   // });
//   let dataHidden = true;
//   privateInfoButton.addEventListener('click', () => {
//     let privateEmail = emailElement.querySelector('.hidden-area');
//     let privatePhone = phoneElement.querySelector('.hidden-area');
//     if (dataHidden) {
//       privateEmail.textContent = email;
//       privatePhone.textContent = phone;
//       privateInfoButton.textContent = 'Hide personal info';
//     } else {
//       privateEmail.textContent = '****';
//       privatePhone.textContent = '****';
//       privateInfoButton.textContent = 'Show personal info';
//     }
//     dataHidden = !dataHidden;
//   });
//   let removeStudentButton = document.createElement('button');
//   removeStudentButton.textContent = 'Remove student';
//   removeStudentButton.addEventListener('click', () => {
//     studentItem.remove();
//     let removedStudentText = `Student (${name} ${surname}) successfully removed.`;
//     renderAlertMessage(removedStudentText);
//   });
//   studentItem.append(nameElement, surnameElement, ageElement, emailElement, phoneElement, itKnowledgeElement, groupElement, interestWrapperElement, privateInfoButton, removeStudentButton);
//   studentsList.prepend(studentItem);
//   let createdStudentText = `Student created (${name} ${surname})`;
//   renderAlertMessage(createdStudentText);
//   // 3. Kontaktų forma turi išsivalyti.
//   event.target.reset();
//   localStorage.clear();
// });
// function renderAlertMessage(text, elementClass) {
//   let alertMessage = document.querySelector('#alert-message');
//   alertMessage.textContent = text;
//   if (elementClass) {
//     alertMessage.classList.add(elementClass);
//   }
//   setTimeout(() => {
//     alertMessage.textContent = '';
//     alertMessage.classList.remove(elementClass);
//   }, 5000);
// }
// function checkInputData(input, text) {
//   let inputErrorMessage = document.createElement('span');
//   inputErrorMessage.classList.add('input-error-message', 'color-red');
//   input.classList.add('input-error');
//   input.after(inputErrorMessage);
//   inputErrorMessage.textContent = text;
// }
// let nameInput = document.getElementById('student-name');
// let surnameInput = document.getElementById('student-surname');
// let ageInput = document.getElementById('student-age');
// let phoneInput = document.getElementById('student-phone');
// let emailInput = document.getElementById('student-email');
// let itKnowledgeInput = document.getElementById('student-it-knowledge');
// let groupInputs = document.querySelectorAll('[name="group"]');
// let interestInputs = document.querySelectorAll('[name="interest"]');
// // nameInput.value = localStorage.getItem('student-name');
// // surnameInput.value = localStorage.getItem('student-surname');
// // ageInput.value = localStorage.getItem('student-age');
// // phoneInput.value = localStorage.getItem('student-phone');
// // emailInput.value = localStorage.getItem('student-email');
// // itKnowledgeInput.value = localStorage.getItem('student-it-knowledge');
// // nameInput.addEventListener('input', () => {
// //   localStorage.setItem('student-name', nameInput.value);
// // });
// // surnameInput.addEventListener('input', () => {
// //   localStorage.setItem('student-surname', surnameInput.value);
// // })
// // ageInput.addEventListener('input', () => {
// //   // localStorage.setItem(ageInput.id, ageInput.value);
// //   let storageKey = ageInput.id;
// //   let storageValue = ageInput.value;
// //   localStorage.setItem(storageKey, storageValue);
// // });
// // phoneInput.addEventListener('input', () => {
// //   let storageKey = phoneInput.id;
// //   let storageValue = phoneInput.value;
// //   localStorage.setItem(storageKey, storageValue);
// // });
// // emailInput.addEventListener('input', (event) => {
// //   let storageKey = event.target.id;
// //   let storageValue = event.target.value;
// //   localStorage.setItem(storageKey, storageValue);
// // });
// // itKnowledgeInput.addEventListener('input', (event) => {
// //   let storageKey = event.target.id;
// //   let storageValue = event.target.value;
// //   localStorage.setItem(storageKey, storageValue);
// // });
// // LOCAL STORAGE 1
// // function populateSimpleInput(input) {
// //   let oldStorageValue = localStorage.getItem(input.id);
// //   if (oldStorageValue !== null) {
// //     input.value = oldStorageValue;
// //   }
// //   input.addEventListener('input', (event) => {
// //     let storageKey = event.target.id;
// //     let storageValue = event.target.value;
// //     localStorage.setItem(storageKey, storageValue);
// //   });
// // }
// // function populateRadioInput(elements) {
// //   let oldStorageValue = localStorage.getItem('group');
// //   document.getElementById(oldStorageValue).checked = true;
// //   elements.forEach((element) => {
// //     element.addEventListener('input', () => {
// //       localStorage.setItem(element.name, element.id);
// //     });
// //   });
// // }
// // function populateCheckboxInputs(elements) {
// //   let localStorageInterests = JSON.parse(localStorage.getItem('interests'));
// //   localStorageInterests.map(id => {
// //     document.getElementById(id).checked = true;
// //   });
// //   elements.forEach((element) => {
// //     element.addEventListener('input', () => {
// //       let studentInterests = document.querySelectorAll('[name="interest"]:checked');
// //       let studentInterestsArr = [];
// //       studentInterests.forEach(interest => {
// //         studentInterestsArr.push(interest.id);
// //       });
// //       localStorage.setItem('interests', JSON.stringify(studentInterestsArr));
// //     })
// //   })
// // }
// // populateSimpleInput(nameInput);
// // populateSimpleInput(surnameInput);
// // populateSimpleInput(ageInput);
// // populateSimpleInput(phoneInput);
// // populateSimpleInput(emailInput);
// // populateSimpleInput(itKnowledgeInput);
// // populateRadioInput(groupInputs);
// // populateCheckboxInputs(interestInputs);
// // LOCAL STORAGE 2
// // function formDataInLocalStorage(form) {
// //   let localName = localStorage.getItem('name');
// //   let localSurname = localStorage.getItem('surname');
// //   let localAge = localStorage.getItem('age');
// //   let localPhone = localStorage.getItem('phone');
// //   let localEmail = localStorage.getItem('email');
// //   let localItKnowledge = localStorage.getItem('it-knowledge');
// //   let localGroup = localStorage.getItem('group');
// //   let nameInput = form.elements.name;
// //   let surnameInput = form.elements.surname;
// //   let ageInput = form.elements.age;
// //   let phoneInput = form.elements.phone;
// //   let emailInput = form.elements.email;
// //   let itKnowledgeInput = form.elements['it-knowledge'];
// //   let groupInput = form.elements.group;
// //   nameInput.value = localName;
// //   surnameInput.value = localSurname;
// //   ageInput.value = localAge;
// //   phoneInput.value = localPhone;
// //   emailInput.value = localEmail;
// //   itKnowledgeInput.value = localItKnowledge;
// //   groupInput.value = localGroup;
// //   form.addEventListener('input', (event) => {
// //     let activeInput = event.target;
// //     let inputName = activeInput.name;
// //     let inputValue = activeInput.value;
// //     localStorage.setItem(inputName, inputValue);
// //   })
// // }
// // formDataInLocalStorage(studentForm);
// // LOCAL STORAGE 2 (naudojant objektą)
// function formDataInLocalStorage(form) {
//   let localName = localStorage.getItem('name');
//   let localSurname = localStorage.getItem('surname');
//   let localAge = localStorage.getItem('age');
//   let localPhone = localStorage.getItem('phone');
//   let localEmail = localStorage.getItem('email');
//   let localItKnowledge = localStorage.getItem('it-knowledge');
//   let localGroup = localStorage.getItem('group');
//   let localInterests = JSON.parse(localStorage.getItem('interest'));
//   let nameInput = form.elements.name;
//   let surnameInput = form.elements.surname;
//   let ageInput = form.elements.age;
//   let phoneInput = form.elements.phone;
//   let emailInput = form.elements.email;
//   let itKnowledgeInput = form.elements['it-knowledge'];
//   let groupInput = form.elements.group;
//   nameInput.value = localName;
//   surnameInput.value = localSurname;
//   ageInput.value = localAge;
//   phoneInput.value = localPhone;
//   emailInput.value = localEmail;
//   itKnowledgeInput.value = localItKnowledge;
//   groupInput.value = localGroup;
//   localInterests.map(interestValue => {
//     let interestElement = document.querySelector(`[value="${interestValue}"]`);
//     if (interestElement) {
//       interestElement.checked = true;
//     }
//   });
//   form.addEventListener('input', (event) => {
//     let activeInput = event.target;
//     let inputName = activeInput.name;
//     let inputValue = activeInput.value;
//     localStorage.setItem(inputName, inputValue);
//     let formInterests = document.querySelectorAll('[name="interest"]:checked');
//     let interestValues = [];
//     formInterests.forEach(interest => {
//       interestValues.push(interest.value);
//     });
//     localStorage.setItem('interest', JSON.stringify(interestValues));
//   })
// }
// formDataInLocalStorage(studentForm);









// let contactsForm = document.querySelector("form")
// let id = 1
// let pointLabel = document.querySelector("#pointLabel")
// let pointsInput = document.querySelector("#pointsInput")

// pointsInput.addEventListener("input", () => {
//     pointLabel.textContent = `Knowledge (between 0 and 10) result: ${pointsInput.value}`

// })

// let electionsInputs = document.querySelector(".elections-div")

// addingElectionInputs_label(5)

// contactsForm.addEventListener("submit", (event) => {
//     event.preventDefault()

//     let labels = document.querySelectorAll("label")
//     let resetButton = document.querySelector("button")
//     let studentsList = document.querySelector(".students-list")
//     let radioInputs = document.querySelectorAll(`input[name="radio"]`)
    
//     let studentsItem = document.createElement("div")
//     let ul = document.createElement("ul")
    
//     ul.textContent = "ID: " + id
//     id++
//     studentsItem.prepend(ul)
//     studentsList.prepend(studentsItem)
    
//     let writtenInputs = document.querySelectorAll(".written-div input")
//     writtenInputs.forEach((input, index) => {
//         if (labels[index]) {
//             addLiElement(ul, `${labels[index].textContent} ${input.value}`)
//         }
//     })
//     let li = document.createElement("li")
//     li.textContent = pointLabel.textContent
//     pointLabel.textContent = `Knowledge (between 0 and 10) result: ${pointsInput.value = 5}`
    
//     radioInputs.forEach(element => {
//         if (element.checked) {
//             addLiElement(ul, element.value)
//         }
//     })
    
//     contactsForm.reset()
    
//     let radioInputId = document.querySelector("#radio0")
//     radioInputId.checked = true
    
//     resetButton.addEventListener("click", () => {
//         ul.remove()
//         let liElements = document.querySelectorAll("li")
//         liElements.forEach(element => {
//             element.remove()
//         })
//         id = 1
//     })
// })

// function addingElectionInputs_label(num) {
//     for (let i = 0; i < num; i++) {
//         let br = document.createElement("br")
//         let radioInputs = document.createElement("input")
//         let label = document.createElement("label")
//         label.textContent = "FEU " + (i + 1) + " gr."
//         label.setAttribute("for", "radio" + i)


//         if (i == 0) {
//             radioInputs.checked = true
//         }
//         radioInputs.id = "radio" + i
//         radioInputs.type = "radio"
//         radioInputs.name = "radio"
//         radioInputs.value = "FEU " + (i + 1) + " gr."
//         console.log(radioInputs.checked)
//         console.dir(radioInputs.id)
//         console.dir(label.for)


//         electionsInputs.append(radioInputs, label, br)
//     }
// }

// function addLiElement(ul, text) {
//     let li = document.createElement("li")
//     li.textContent = text
//     ul.append(li)

// }








// let contactsForm = document.querySelector("form")
// let id = 1
// let rangeLabel = document.querySelector("#rangeLabel")
// let pointsInput = document.querySelector("#range")
// let shownumber = false

// pointsInput.addEventListener("input", () => {
//     rangeLabel.textContent = `Knowledge: ${pointsInput.value}`
// })

// contactsForm.addEventListener("submit", (event) => {
//     event.preventDefault()

//     let studentsList = document.querySelector(".students-list")
//     let studentsItem = document.querySelector(".students-item")
//     let radioInputs = document.querySelectorAll(`input[name="radio"]`)
//     let writingLabels = document.querySelectorAll(".container-input-label label")
    
//     let writeInput = event.target.elements.writeInput

//     let div = document.createElement("div")
//     let buttonShowNumber = document.createElement("button")
//     // let  = document.createElement("button")
//     div.className = "student-result"
//     buttonShowNumber.classList = "button item-button"
//     buttonShowNumber.textContent = "Show"
//     let studentResultDiv = document.querySelector(".student-result")
    

//     let ul = document.createElement("ul")
//     ul.textContent = "ID: " + id
//     id++
//     studentsItem.append(div, )
//     div.append(ul,buttonShowNumber)

//     writeInput.forEach((element, index) => {
//         // addLiElement(ul, `${writingLabels[index].textContent}: ${element.value}`)
//         let li = document.createElement("li")
//         if (element.id == "phoneNumber" || element.id == "email") {
//             console.log(element.value)
//             li.textContent = `${writingLabels[index].textContent}: ****`
//             li.id = "show"
//         } else{

//             li.textContent = `${writingLabels[index].textContent}: ${element.value}`
//         }
//         ul.append(li)

//         }) 

//     addLiElement(ul, `Knowledge: ${pointsInput.value}`)

//     rangeLabel.textContent = `Knowledge: ${pointsInput.value = 5} `

//     radioInputs.forEach(element => {
//         if (element.checked) {
//             addLiElement(ul, `Group: ${element.value}`)
//         }
//     })
//     let checkbox = document.querySelectorAll(`input[type="checkbox"]`)
//     console.log(checkbox)
    
//     let result = []
//     checkbox.forEach(element => {
//         if (element.checked) {
//             result.push(element.value)
//         }
//     })
//     addLiElement(ul, `Interests: ${result} `)

//     if (id > 2){
//         studentsList.prepend(studentResultDiv)
//     }
//     let liShow = document.querySelectorAll("#show")
//     contactsForm.reset()
//     let buttonShow = document.querySelector('.item-button')
//     buttonShow.addEventListener("click", () => {
//         liShow.forEach(element => {
//             element.textContent = "das"
//         })
//     })
//     // resetButton.addEventListener("click", () => {
//     //     let tdElements = document.querySelectorAll("td")
//     //     tdElements.forEach(element => {
//     //         element.remove()
//     //     })
//     //     id = 1
//     // })
// })

// function addLiElement(ul, text ) {
//     let li = document.createElement("li")
//     li.textContent = text
//     ul.append(li)

// }











// let contactsForm = document.querySelector("form")
// let id = 1
// let rangeLabel = document.querySelector("#rangeLabel")
// let pointsInput = document.querySelector("#range")
// let shownumber = false

// pointsInput.addEventListener("input", () => {
//     rangeLabel.textContent = `Knowledge: ${pointsInput.value}`
// })

// contactsForm.addEventListener("submit", (event) => {
//     event.preventDefault()
    
//     let checkbox = document.querySelectorAll(`input[type="checkbox"]`)
//     let radioInputs = document.querySelectorAll(`input[name="radio"]`)
//     let writeInput = event.target.elements.writeInput
//     let writeInputs = event.target.elements
//     let firstName = event.target.elements.firstName
//     let lastName = event.target.elements.lastName
//     let age = event.target.elements.age
    
//     let email = event.target.elements.email
//     let range = event.target.elements.range
//     let radio
//     let checkboxCheckeds = []

//     radioInputs.forEach(element => {
//         if (element.checked) {
//             return radio = element
//         }
//     })

    
//     checkbox.forEach(element => {
//         if (element.checked) {
//             checkboxCheckeds.push(element.value)
//         }
//     })

    

    





//     let studentsList = document.querySelector(".students-list")
//     let studentsItem = document.querySelector(".students-item")
//     let writingLabels = document.querySelectorAll(".container-input-label label")
    
//     // console.log(writeInputs)
//     // console.log(firstName.value)
//     // console.log(lastName.value)
//     // console.log(age.value)
//     // console.log(phoneNumber.value)
//     // console.log(email.value)
//     // console.log(radio.value)
//     // console.log(range.value)
//     // console.log(checkboxCheckeds)

//     let div = document.createElement("div")
//     let buttonShowNumber = document.createElement("button")
//     // let  = document.createElement("button")
//     div.className = "student-result"
//     buttonShowNumber.classList = "button item-button"
//     buttonShowNumber.textContent = "Show"
//     let studentResultDiv = document.querySelector(".student-result")
    

//     let ul = document.createElement("ul")
//     ul.textContent = "ID: " + id
//     id++
//     studentsItem.append(div, )
//     div.append(ul,buttonShowNumber)

//     // let hiddenNumbet = document.createElement("span")
//     // hiddenNumbet.className = "hidden-area"
//     // hiddenNumbet.textContent = "****"

//     addLiElement(ul, `First name: ${firstName.value}`)
//     addLiElement(ul, `Last name: ${lastName.value}`)
//     addLiElement(ul, `Age: ${age.value}`)
   
//     let phoneElement = document.createElement("li")
//     // console.log(hiddenNumbet)
//     phoneElement.textContent =`Phone number ****`
//     // phoneElement.append(hiddenNumbet)
    
//     ul.append(phoneElement)

//     // addLiElement(ul, `Phone number: ${hiddenNumbet}`)

//     addLiElement(ul, `Email: ****`)
//     addLiElement(ul, `Knowledge: ${range.value}`)
//     addLiElement(ul, `Group: ${radio.value}`)
//     addLiElement(ul, `Interests: ${checkboxCheckeds}`)

    
//     rangeLabel.textContent = `Knowledge: ${pointsInput.value = 5} `

//     if (id > 2){
//         studentsList.prepend(div)
//     }
//     let phoneNumber = event.target.elements.phoneNumber

//     // let liShow = document.querySelectorAll("#show")
//     let buttonShow = document.querySelector('.item-button')
//     let dataHidden = true;
//     console.log(phoneNumber.value)
//     buttonShow.addEventListener("click", () => {
//         // let privateEmail = document.querySelector('.hidden-area');
//         // let privatePhone = phoneElement.querySelector('.hidden-area');
        
//         if (dataHidden) {
//             console.log(phoneNumber.value)
            
            
//             // console.log(privateEmail)
//             //   privateEmail.textContent = email.value;
//             phoneElement.textContent = phoneNumber.value;
//             //   privatePhone.textContent = phoneNumber.value;
            
//             //   privateInfoButton.textContent = 'Hide personal info';
//         } else {
//             //   privateEmail.value = '****';
//             phoneElement.textContent = "****"
            
            
//             //   privatePhone.textContent = '****';
//             //   privateInfoButton.textContent = 'Show personal info';
//         }
//         dataHidden = !dataHidden;
//         // console.log(hiddenNumbet.textContent)
//         // console.log(hiddenNumbet)
//         // hiddenNumbet.textContent = phoneNumber.value
//         // console.log(hiddenNumbet.textContent)
        
//     })
//     contactsForm.reset()
//     // resetButton.addEventListener("click", () => {
//         //     let tdElements = document.querySelectorAll("td")
//         //     tdElements.forEach(element => {
//             //         element.remove()
//             //     })
//             //     id = 1
//     // })
// })

// function addLiElement(ul, text ) {
//     let li = document.createElement("li")
//     li.textContent = text
//     ul.append(li)

// }



//// gerasis varijantas

// let contactsForm = document.querySelector("form")
// let id = 1
// let rangeLabel = document.querySelector("#rangeLabel")
// let pointsInput = document.querySelector("#range")
// let shownumber = false

// let studentsList = document.querySelector(".students-list")
// // let studentsItem = document.querySelector(".students-item")

// pointsInput.addEventListener("input", () => {
//     rangeLabel.textContent = `Knowledge: ${pointsInput.value}`
// })

// contactsForm.addEventListener("submit", (event) => {
//     event.preventDefault()
    
//     let checkbox = document.querySelectorAll(`input[type="checkbox"]`)
//     let radioInputs = document.querySelectorAll(`input[name="radio"]`)
//     let writeInput = event.target.elements.writeInput
//     let writeInputs = event.target.elements
//     let firstName = event.target.elements.firstName
//     let lastName = event.target.elements.lastName
//     let age = event.target.elements.age
//     let phoneNumber = event.target.elements.phoneNumber.value
//     let email = event.target.elements.email
//     let range = event.target.elements.range
//     let radio
//     let checkboxCheckeds = []

//     radioInputs.forEach(element => {
//         if (element.checked) {
//             return radio = element
//         }
//     })

    
//     checkbox.forEach(element => {
//         if (element.checked) {
//             checkboxCheckeds.push(element.value)
//         }
//     })
    
//     let studentItem = document.createElement("div")
//     studentItem.classList.add('student-item');
    
    
    
//     let ul = document.createElement("ul")
//     ul.textContent = "ID: " + id
//     id++
    
//     addLiElement(ul, `First name: ${firstName.value}`)
//     addLiElement(ul, `Last name: ${lastName.value}`)
//     addLiElement(ul, `Age: ${age.value}`)
    
//     let phoneElement = document.createElement('li');
//     phoneElement.innerHTML = `<strong>Phone:</strong> <span class="hidden-area">****</span>`;
//     ul.append(phoneElement)
    
//     addLiElement(ul, `Email: ****`)
//     addLiElement(ul, `Knowledge: ${range.value}`)
//     addLiElement(ul, `Group: ${radio.value}`)
//     addLiElement(ul, `Interests: ${checkboxCheckeds}`)

//     let buttonShowNumber = document.createElement("button")
//     buttonShowNumber.classList = "button item-button"
//     buttonShowNumber.textContent = "Show"
    
//     let dataHidden = true;
//     console.log(phoneNumber.value)
//     buttonShowNumber.addEventListener("click", () => {
//         let privatePhone = phoneElement.querySelector('.hidden-area');
        
//         if (dataHidden) {
//             console.log(phoneNumber.value)
//             // console.log(privatePhone.textContent)
//             privatePhone.textContent = phoneNumber;
//             // phoneElement.textContent = phoneNumber.value;
            
//         } else {
//             // phoneElement.textContent = "****"  
//             privatePhone.textContent = '****';
//         }
//         dataHidden = !dataHidden; 
//     })
//     studentItem.append(ul,buttonShowNumber)
//     console.log(studentItem)
    
//     studentsList.append(studentItem)
//     console.log(studentsList)
//     contactsForm.reset()
// })

// function addLiElement(ul, text ) {
//     let li = document.createElement("li")
//     li.textContent = text
//     ul.append(li)

// }