const input = document.querySelector(".todo__input");
const addBtn = document.querySelector(".todo__btn");
const todoBody = document.querySelector(".todo__body");
const todoTemplate = document.querySelector(".todo__template");
const allCount = document.querySelector(".all-count");
const completeCount = document.querySelector(".complete-count");

addBtn.onclick = addTodo;

function addTodo() {
  const text = input.value;

  if (text.trim() != "") {
    const clone = todoTemplate.content.cloneNode(true);
    const todoText = clone.querySelector(".todo__text");
    const todoDelete = clone.querySelector(".todo__delete");
    const todoComplete = clone.querySelector(".todo__complete");
    const todoItem = clone.querySelector(".todo__item");

    todoDelete.onclick = function () {
      if (confirm("are you sure?")) {
        todoItem.remove();
        calculateCount();
      }
    };
    todoComplete.onclick = function () {
      todoItem.classList.toggle("todo__item-complete");
      calculateCount();
    };

    todoText.innerHTML = text;

    todoBody.append(clone);

    input.value = "";

    calculateCount();
  } else {
    alert("type text...");
  }
}
function calculateCount() {
  const all = document.querySelectorAll(".todo__item").length;
  const complete = document.querySelectorAll(".todo__item-complete").length;

  allCount.innerHTML = all;
  completeCount.innerHTML = complete;
}
