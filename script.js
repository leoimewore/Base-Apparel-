"use strict";

const email = document.querySelector(".email");
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const form = document.querySelector(".form");
const errorIcon = document.querySelector('.icon-error');
const errorMessage =document.querySelector('.error-msg');


const showError = function() {
    errorIcon.classList.remove('hidden')
    errorMessage.innerHTML = 'Please provide a valid email'
    


}

form.addEventListener('submit',(e) => {
    
  if (email.value === "" || email.value === null){
     showError()
     
  }else if (!email.value.match(emailRegex)) {
    showError()

  } else {
    //   alert('Thank you for registering')

      errorIcon.classList.add('hidden')
      errorMessage.innerHTML = "Thank you ✔"
      errorMessage.style.color = "green"
      errorMessage.style.bottom = "55px"

      form.reset()
      
      
  }

  e.preventDefault()

  


})

// const button = document.querySelector('.submit');

// button.addEventListener('click', function() {
//     errorIcon.classList.add('hidden')
//     errorMessage.innerHTML = ''

// })






// const emailInput = document.getElementById('email');
// const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// if (!emailInput.value.match(emailRegex)) {
//  alert('Invalid email address.');
// }


