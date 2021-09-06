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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


/*********************** Fermer modal ***********************/
// modal
const closeModalBtn = document.querySelectorAll("#close");

// fermer la modal
closeModalBtn.forEach((elt) => elt.addEventListener("click", closeModal));
function closeModal() {
modalbg.style.display = "none";
}

/*********************** Champs ***********************/
// Entrées formulaire
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");

const radio = document.querySelector('input[name="location"]:checked');

const getSelectedValue = document.querySelector(
'input[name="location"]:checked'
);
const checkTerms = document.getElementById("checkbox1");

// Verification
form.addEventListener("submit", (e) => {
e.preventDefault();
});

function validate() {
// si la valeur du champ n'est pas vide
if (firstName.value.length < 2) {
  firstName.classList.add("borderRed");
  let myError = document.getElementById("errorfirst");
  myError.innerHTML = " Veuillez saisir 2 caractères minimum";
  myError.style.color = "red";
  return false;
} else {
  document.getElementById("errorfirst").innerHTML = "";
  firstName.classList.remove("borderRed");
}

// erreur  input si nom vide
if (lastName.value.length < 2) {
  lastName.classList.add("borderRed");
  let error = document.getElementById("errorlast");
  error.innerHTML = "Veuillez saisir 2 caractères minimum";
  error.style.color = "red";
  return false;
} else {
  document.getElementById("errorlast").innerHTML = "";
  lastName.classList.remove("borderRed");
}

// erreur input si mail vide
if (email.value === "") {
  email.classList.add("borderRed");
  let error = document.getElementById("errormail");
  error.innerHTML = "Veuillez entrez une adresse mail valide";
  error.style.color = "red";
  return false;
} else {
  document.getElementById("errormail").innerHTML = "";
  email.classList.remove("borderRed");
}

//erreur si birthdate vide
if (birthDate.value === "") {
  birthDate.classList.add("borderRed");
  let error = document.getElementById("errorbirthDate");
  error.innerHTML = " Date de naissance est vide";
  error.style.color = "red";
  return false;
} else {
  document.getElementById("errorbirthDate").innerHTML = "";
  birthDate.classList.remove("borderRed");
}

//erreur input si quantité vide
if (quantity.value === "") {
  let error = document.getElementById("errorquantity");
  error.innerHTML = "Veuillez saisir un nombre";
  error.style.color = "red";
  return false;
} else {
  document.getElementById("errorquantity").innerHTML = "";
}

// erreur ville

if (radio === null) {
  let error = document.getElementById("errorcity");
  error.innerHTML = "Veuillez selectionner une ville";
  error.style.color = "red";
  return false;
} else {
  document.getElementById("errorcity").innerHTML = "";
}

  // check terms
  if (checkTerms.checked === false) {
    let error = document.getElementById("errorcheckbox");
    error.innerHTML = "Veuillez accepter nos conditions d'utilisations";
    error.style.color = "red";
    return false;
  } else {
    document.getElementById("errorcheckbox").innerHTML = "";
  }
  return true
}