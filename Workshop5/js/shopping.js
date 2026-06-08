// Tehtävä 1 

const contactForm = document.querySelector("#contactForm");
const emailInput = document.querySelector("#email");
const commentInput = document.querySelector("#comment");

const emailError = document.querySelector("#emailError");
const commentError = document.querySelector("#commentError");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  let comment = commentInput.value.trim();

  emailError.textContent = "";
  commentError.textContent = "";

  emailInput.style.backgroundColor = "white";
  commentInput.style.backgroundColor = "white";

  if (email.length < 6 || email.length >= 15) {
    emailError.textContent = " Emailin pitää olla vähintään 6 ja alle 15 merkkiä.";
    emailInput.style.backgroundColor = "pink";
    return;
  }

  if (email.indexOf("@") == -1) {
    emailError.textContent = " Emailissä pitää olla @-merkki.";
    emailInput.style.backgroundColor = "pink";
    return;
  }

  if (comment == "") {
    commentError.textContent = " Kommentti ei saa olla tyhjä.";
    commentInput.style.backgroundColor = "pink";
    return;
  }

  if (comment.length > 50) {
    comment = comment.substring(0, 50);
    commentInput.value = comment;
  }

  alert("Email: " + email);
  alert("Comment: " + comment);
});

//Tehtävä 2 

const membershipForm = document.querySelector("#theForm");
const typeInput = document.querySelector("#type");
const yearsInput = document.querySelector("#years");
const costInput = document.querySelector("#cost");

const message = document.createElement("p");
membershipForm.appendChild(message);

membershipForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const type = typeInput.value;
  const years = Number(yearsInput.value);

  let price = 0;

  if (type == "basic") {
    price = 10;
  }

  if (type == "premium") {
    price = 15;
  }

  if (type == "gold") {
    price = 20;
  }

  if (type == "platinum") {
    price = 25;
  }

  let total = price * years;

  message.textContent = "";

  if (years > 2) {
    total = total * 0.8;
    message.textContent = "You get a 20% discount.";
  }

  if (years >= 5) {
    total = total - 5;
    message.textContent = "You get a 20% discount and an extra 5€ discount. Thank you for being a loyal customer!";
  }

  costInput.value = total + " €";
});