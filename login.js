let accountObje = {
    userName: "Jonass",
    password: "123456789123",
}
let accountObje1 = {
    userName: "Marius",
    password: "654321",
}

// let accounts = [accountObje, accountObje1]
console.log(accounts)

// let submitButton = document.querySelector(`#submit`)

// let loginForm = document.querySelector("#login-form")

// let userName = document.getElementById("userName")
// let password = document.getElementById("password")


// function inputLocalStorage(input) {

//     let localStorageValue = localStorage.getItem(input.id)
//     if (input.type === `checkbox`){
//         isChecked = localStorageValue === `true`
//         input.checked = isChecked
    
//         input.addEventListener(`input`, () => {
//             localStorage.setItem(input.id, input.checked)
//         })
//     } else {

//         input.value = localStorageValue
    
//         input.addEventListener(`input`, () => {
//             localStorage.setItem(input.id, input.value)
//         })
//     }
// }

// inputLocalStorage(userName)
// inputLocalStorage(password)
// inputLocalStorage(checkboxchecked)



// // let checkboxchecked = document.querySelectorAll(`[name="consent"]:checked`)

// let checkboxchecked = document.querySelector(`[name="consent"]:checked`)
// let infoInputs = document.querySelector(".info-inputs")
// let boolUser_PasswordValueCount = false
// infoInputs.addEventListener("input", () => {
//     console.log(userName.value)
//     // localStorage.setItem(`userNameValue`, userName.value)
//     // localStorage.setItem(`passwordValue`, password.value)
//     if (userName.value.length > 5 && password.value.length > 11) {
//         boolUser_PasswordValueCount = true
//         console.log(userName.value.length)
//     } else {
//         boolUser_PasswordValueCount = false
//     }

//     let check_User_password = document.querySelectorAll(`[name="writeInput"]:required`)
//     if (checkboxchecked.length !== 0 && check_User_password.length === 2 && boolUser_PasswordValueCount) {
//         submitButton.removeAttribute("disabled")
//     } else {
//         submitButton.setAttribute("disabled", true)
//     }
//     // localStorage.setItem(`checkboxValue`, checkboxchecked.checked)
    
//     // checkboxchecked.checked = localStorage.getItem(`checkboxValue`)
// })

// // isLogin = localStorage.getItem(`isLogin`, isLogin)

// // function boolenLocalStorage(boolen) {
    
//     // let boolenocalStorage = localStorage.getItem(`isLogin`)
    
//     //     isChecked = boolenocalStorage === `true`
//     //     boolen = isChecked
    
//     // boolen.addEventListener(`input`, () => {
        
//         // })
        
//         // }

  

// let body = document.querySelector(`body`)

   
    

//     loginForm.addEventListener("submit", (event) => {
//         event.preventDefault()
        
//         let password = event.target.elements.password
//         let userName = event.target.elements.userName.value
//         let boolenCanJoin = false
//         console.log(password.value)
//         console.log(userName.value)
//         accounts.filter(element => {
//             if (element.userName === userName && element.password === password.value) {
//                 boolenCanJoin = !boolenCanJoin
//             }
//         })
//         if (boolenCanJoin) {
//             // container.remove()
//             // let container = document.querySelector(`.container`)
//             // let p = document.createElement("p")
//             // p.textContent = "sveiki atvyke"
//             // body.append(p)
//             // localStorage.setItem(`isLogin`, true)
//             cheackIfLoggedin()
//             localStorage.setItem(`isLogin`, true)
//         } else {
//             password.value = ""
//             console.log(password)
//             let p = document.createElement("p")
//             p.textContent = "Prisijungimo vardas arba slaptažodis buvo neteisingas"
//             container.append(p)
//         }
//     })

//     function cheackIfLoggedin() {
//         let isLoggedIn = localStorage.getItem(`isLogin`)
        
//         if (isLoggedIn === `true`){
//             renderLoggedInview()
//         }
//     }
//     function renderLoggedInview() {
//         let container = document.querySelector(`.container`)
//         container.remove()
//         let p = document.createElement("p")
//         p.textContent = "sveiki atvyke"
//         body.append(p)
//     }



      let accounts = [accountObje, accountObje1]
console.log(accounts)

let submitButton = document.querySelector(`#submit`)

let loginForm = document.querySelector("#login-form")

let userName = document.getElementById("userName")
let password = document.getElementById("password")

      let userAccess = document.querySelector('#consentFirst');

      userAccess.addEventListener('change', () => {
        // submitButton.toggleAttribute('disabled');
        // if (submitButton.hasAttribute('disabled')) {
        //   submitButton.removeAttribute('disabled');
        // } else {
        //   submitButton.setAttribute('disabled', true);
        // }
        toggleLoginButton();
      })
      userName.addEventListener('input', () => {
        toggleLoginButton();
      });
      password.addEventListener('input', () => {
        toggleLoginButton();
      })
      function toggleLoginButton() {
        if (userAccess.checked && userName.value.length > 4 && password.value.length > 5) {
          submitButton.removeAttribute('disabled');
        } else {
          submitButton.setAttribute('disabled', true);
        }
      }
      loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let name = event.target.elements.userName.value;
        let password = event.target.elements.password.value;
        // let matchedUser = users.filter(user => {
        //   return user.userName === name && user.userPassword === password;
        // });
        let matchedUser = accounts.filter(user => user.userName === name && user.password === password);
        if (matchedUser.length > 0) {
          // event.target.remove();
          // let greetingMessage = document.createElement('h1');
          // greetingMessage.textContent = 'Sveikiname sėkmingai prisijungus';
          // document.body.prepend(greetingMessage);
          renderLoggedInView();
          localStorage.removeItem('user-name');
          localStorage.removeItem('user-password');
          localStorage.removeItem('user-access');
          localStorage.setItem('isLoggedIn', true);
        } else {
          let loginErrorElement = document.querySelector('.login-error');
          if (loginErrorElement) {
            loginErrorElement.remove();
          }
          let errorElement = document.createElement('span');
          errorElement.classList.add('login-error');
          errorElement.textContent = 'Slaptažodis ir/arba prisijungimo vardas buvo neteisingas.';
          event.target.append(errorElement);
          event.target.elements.password.value = '';
        }
      })
      function inputLocalStorage(input) {
        let localStorageValue = localStorage.getItem(input.id);
        if (input.type === 'checkbox') {
          let isChecked = localStorageValue === 'true';
          input.checked = isChecked;
          input.addEventListener('input', () => {
            localStorage.setItem(input.id, input.checked);
          });
        } else {
          input.value = localStorageValue;
          input.addEventListener('input', () => {
            localStorage.setItem(input.id, input.value);
          });
        }
      }
      inputLocalStorage(userName);
      inputLocalStorage(password);
      inputLocalStorage(userAccess);
      toggleLoginButton();
      function checkIfLoggedIn() {
        let isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'))
        if (isLoggedIn) {
          renderLoggedInView();
        }
      }
      checkIfLoggedIn();
      function renderLoggedInView() {
        loginForm.remove();
        let greetingMessage = document.createElement('h1');
        greetingMessage.textContent = 'Sveikiname sėkmingai prisijungus';

        let logOutButton = document.createElement(`button`)
        logOutButton.textContent = `Log Out`

        logOutButton.addEventListener(`click`, () => {
            localStorage.setItem('isLoggedIn', false);
        })
        document.body.prepend(greetingMessage, logOutButton);
      }



