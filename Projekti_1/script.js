let todoFormi = document.querySelector("#todoFormi");
let taskInput = document.querySelector("#task");
let errorviesti = document.querySelector("#errorMessage");
let list = document.querySelector("#list");
let clearBtn = document.querySelector("#clearBtn");

todoFormi.addEventListener("submit", function (event) {
  event.preventDefault();
});