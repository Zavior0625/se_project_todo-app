export const popup = document.querySelector(".popup");
export const todoList = document.querySelector(".todos__list");
export const addButton = document.querySelector(".header__button");
export const form = document.querySelector("#add-todo-form");
export const initialTodos = [];

export const validationConfig = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible",
};
