let todoFormi = document.querySelector("#todoFormi");
let taskInput = document.querySelector("#task");
let errorviesti = document.querySelector("#errorviesti");
let list = document.querySelector("#list");
let clearBtn = document.querySelector("#clearBtn");

todoFormi.addEventListener("submit", function (event) {
  event.preventDefault();
  let tehtava = taskInput.value;

  if (tehtava === "") {
    errorviesti.textContent = "Kenttä ei saa olla tyhjä!";
    return;
  }
  errorviesti.textContent = "";
});