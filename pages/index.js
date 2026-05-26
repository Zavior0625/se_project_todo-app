import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForms from "../components/PopupWithForms.js";
import TodoCounter from "../components/TodoCounter.js";

import { initialTodos, validationConfig } from "../utils/constants.js";

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;

    return v.toString(16);
  });
}

const addButton = document.querySelector(".header__button");

const todoCounter = new TodoCounter(initialTodos, ".counter__text");

function createTodo(data) {
  const todo = new Todo(data, "#todo-template", {
    handleCheckboxChange: (completed) => {
      todoCounter.updateCompleted(completed);
    },

    handleDelete: (completed) => {
      if (completed) {
        todoCounter.updateCompleted(false);
      }

      todoCounter.updateTotal(false);
    },
  });

  return todo.getView();
}

const todoSection = new Section({
  items: initialTodos,

  renderer: (item) => {
    const todoElement = createTodo(item);

    todoSection.addItem(todoElement);
  },

  containerSelector: ".todos__list",
});

todoSection.renderItems();

const addTodoPopup = new PopupWithForm("#add-todo-popup", (data) => {
  const todoData = {
    id: uuidv4(),
    name: data.name,
    date: data.date,
    completed: false,
  };

  const todoElement = createTodo(todoData);

  todoSection.addItem(todoElement);

  todoCounter.updateTotal(true);
});

addTodoPopup.setEventListeners();

const formValidator = new FormValidator(
  validationConfig,
  document.querySelector(".popup__form"),
);

formValidator.enableValidation();

addButton.addEventListener("click", () => {
  formValidator.resetValidation();

  addTodoPopup.open();
});
