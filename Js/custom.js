//.pop-up div (button)//
let popSection = document.querySelector(".pop-up");
let btnPop = document.getElementById("click");

btnPop.onclick = function () {
  popSection.style.display = "none";
}

//.signing (inputs)//
let inputFirst = document.querySelector("[name='first']");
let inputLast = document.querySelector("[name='last']");
let inputEmail = document.querySelector("[name='email']");
let inputPhone = document.querySelector("[name='phone']");
let inputMessage = document.querySelector("[name='message']");
let inputSubmit = document.querySelector("[name='submit']");
let paragraphLength = document.querySelectorAll(".length");

//Style for p
for (let i = 0; i < paragraphLength.length; i++) {
  paragraphLength[i].style.color = "red";
}

//Form Function
document.forms[0].onsubmit = function (e) {
  let firstValid = false;
  let lastValid = false;
  let emailValid = false;
  let phoneValid = false;
  let messageValid = false;

  if (inputFirst.value !== "" && inputFirst.value.length <= 40) {
    return firstValid = true;
  }

  if (inputLast.value !== "" && inputLast.value.length <= 40) {
    return lastValid = true;
  }

  if (inputEmail.value !== "" && inputEmail.value.length <= 40) {
    return emailValid = true;
  }

  if (inputPhone.value !== "" && inputPhone.value.length <= 40) {
    return phoneValid = true;
  }

  if (inputMessage.value !== "" && inputMessage.value.length <= 40) {
    return messageValid = true;
  }

  if (firstValid === false || lastValid === false || emailValid === false || phoneValid === false || messageValid === false) {
    return e.preventDefault();
  }
}

//input show p oninput
inputFirst.oninput = function () {
  paragraphLength[0].style.display = "block";
  paragraphLength[0].textContent = `Maximum is 20 => ${inputFirst.value.length}`;
}

inputLast.oninput = function () {
  paragraphLength[1].style.display = "block";
  paragraphLength[1].textContent = `Maximum is 20 => ${inputLast.value.length}`;
}

inputEmail.oninput = function () {
  paragraphLength[2].style.display = "block";
  paragraphLength[2].textContent = `Maximum is 20 => ${inputEmail.value.length}`;
}

inputPhone.oninput = function () {
  paragraphLength[3].style.display = "block";
  paragraphLength[3].textContent = `Maximum is 20 => ${inputPhone.value.length}`;
}

inputMessage.oninput = function () {
  paragraphLength[4].style.display = "block";
  paragraphLength[4].textContent = `Maximum is 20 => ${inputMessage.value.length}`;
}




