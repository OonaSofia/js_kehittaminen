let todoFormi = document.querySelector("#todoFormi");
let taskInput = document.querySelector("#task");
let errorviesti = document.querySelector("#errorviesti");
let list = document.querySelector("#list");
let clearBtn = document.querySelector("#clearBtn");

todoFormi.addEventListener("submit", function (event) {
  errorviesti.textContent = "";
  document.getElementById("task").style.border = "";

  let tehtava = document.getElementById("task").value;

  if (tehtava === "") {
    document.getElementById("task").style.border = "2px solid red";
    errorviesti.textContent = "Kenttä ei saa olla tyhjä!";
    event.preventDefault();
  }
});