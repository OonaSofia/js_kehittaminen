let todoFormi = document.querySelector("#todoForm");
let taskInput = document.querySelector("#task");
let errorviesti = document.querySelector("#errorMessage");
let list = document.querySelector("#list");
let clearBtn = document.querySelector("#clearBtn");

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Lomake lähetettiin");
});