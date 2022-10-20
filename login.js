let accountObje = {
    userName: "Jonass",
    password: "123456789123",
}
let accountObje1 = {
    userName: "Marius",
    password: "654321",
}
console.log(accounts)
      let accounts = [accountObje, accountObje1]
console.log(accounts)

let submitButton = document.querySelector(`#submit`)

let loginForm = document.querySelector("#login-form")

let userName = document.getElementById("userName")
let password = document.getElementById("password")

      let userAccess = document.querySelector('#consentFirst');

      userAccess.addEventListener('change', () => {

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

        let matchedUser = accounts.filter(user => user.userName === name && user.password === password);
        if (matchedUser.length > 0) {

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



