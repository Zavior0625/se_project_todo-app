import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";

import { initialTodos, validationConfig } from "../utils/constants.js";

import { v4 as uuidv4 } from "https://jspm.dev/uuid";

const todoList = document.querySelector(".todos__list");

const addTodoButton = document.querySelector(".header__button");

const popup = document.querySelector("#add-todo-popup");

const closeButton = document.querySelector(".popup__close");

const formElement = document.querySelector("#add-todo-form");

const todoNameInput = document.querySelector("#todo-name");

const todoDateInput = document.querySelector("#todo-date");

function openPopup() {
  popup.classList.add("popup_visible");
}

function closePopup() {
  popup.classList.remove("popup_visible");
}

function renderTodo(data) {
  const todo = new Todo(data, "#todo-template");

  const todoElement = todo.getView();

  todoList.prepend(todoElement);
}

initialTodos.forEach((todoData) => {
  renderTodo(todoData);
});

addTodoButton.addEventListener("click", () => {
  openPopup();
});

closeButton.addEventListener("click", () => {
  closePopup();
});

const formValidator = new FormValidator(validationConfig, formElement);
formValidator.enableValidation();

formElement.addEventListener("submit", (evt) => {
  evt.preventDefault();

  formValidator.resetValidation();

  const inputValues = {
    name: inputElement.value,
    date: dateInput.value,
  };

  const todo = new Todo(inputValues, "#todo-template");
  const todoElement = todo.getView();

  todosContainer.prepend(todoElement);

  formElement.reset();
});
