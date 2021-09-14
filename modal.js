function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");


// DOM Elements for each input and error
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const location2 = document.getElementsByName("location");
const checkTerms = document.getElementById("checkbox1");

const closeBtn = document.querySelector(".close");
const submitBtn = document.querySelector(".btn-submit");
const form = document.getElementById("reserve");
const closeBtnRed = document.getElementById("closeBtnRed");
const confirmation = document.getElementById("confirmation");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.addEventListener("click", closeModal);
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

closeBtnRed.style.display = "none";
confirmation.style.display = "none";

let formValid = false;

// Verifs
function checkInputs() {
  // verif prénom
  let verifName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/;
  if (verifName.exec(first.value) === null || first.length < 2) {
    first.classList.add("borderRed");
    let myError = document.getElementById("errorfirst");
    myError.innerHTML = " Veuillez saisir 2 caractères minimum";
    myError.style.color = "red";
    return formValid === false;
  } else {
    document.getElementById("errorfirst").innerHTML = "";
    first.classList.remove("borderRed");
  }

  // verif nom
  if (verifName.exec(last.value) === null || last.length < 2) {
    last.classList.add("borderRed");
    let error = document.getElementById("errorlast");
    error.innerHTML = "Veuillez saisir 2 caractères minimum";
    error.style.color = "red";
    return formValid === false;
  } else {
    document.getElementById("errorlast").innerHTML = "";
    last.classList.remove("borderRed");
  }

  // verif mail
  let verifEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if (verifEmail.exec(email.value) === null) {
    email.classList.add("borderRed");
    let error = document.getElementById("errormail");
    error.innerHTML = "Veuillez entrez une adresse mail valide";
    error.style.color = "red";
    return formValid === false;
  } else {
    document.getElementById("errormail").innerHTML = "";
    email.classList.remove("borderRed");
  }

  // verif date de naissance
  if (!birthdate.value) {
    birthdate.classList.add("borderRed");
    let myError = document.getElementById("errorbirthdate");
    myError.innerHTML = " Date de naissance est vide";
    myError.style.color = "red";
    return formValid === false;
  } else {
    document.getElementById("errorbirthdate").innerHTML = "";
    birthdate.classList.remove("borderRed");
  }

  // verif tournoi
  if (quantity.value === "" || isNaN(quantity.value)) {
    quantity.classList.add("borderRed");
    let myError = document.getElementById("errorquantity");
    myError.innerHTML = " Veuillez entrer un nombre";
    myError.style.color = "red";
    return formValid === false;
  } else {
    document.getElementById("errorquantity").innerHTML = "";
    quantity.classList.remove("borderRed");
  }

  //verif villes
  if (
    !(
      location2[0].checked ||
      location2[1].checked ||
      location2[2].checked ||
      location2[3].checked ||
      location2[4].checked ||
      location2[5].checked
    )
  ) {
    let myError = document.getElementById("errorcity");
    myError.innerHTML = " Veuillez selectionner une ville";
    myError.style.color = "red";
    return formValid === false;
  } else {
    document.getElementById("errorcity").innerHTML = "";

  }

  // verif terms
  if (!checkTerms.checked) {
    let error = document.getElementById("errorcheckbox");
    error.innerHTML = "Veuillez accepter les conditions d'utilisations";
    error.style.color = "red";
    return formValid === false;
  } else {
    document.getElementById("errorcheckbox").innerHTML = "";
  }
  return (formValid = true);
}


function validate(event) {
  event.preventDefault();
  checkInputs();

 
  if (formValid === true) {
    form.style.display = "none";
    closeBtnRed.style.display = "block";
    submitBtn.style.display = "none";
    confirmation.style.display = "flex";
    closeBtnRed.addEventListener("click", closeModal);
    return true;
  }
}


form.addEventListener("submit", validate);



