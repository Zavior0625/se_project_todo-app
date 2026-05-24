import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

import { initialTodos, validationConfig } from "../utils/constants.js";

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
    name: data.name,
    date: data.date,
    completed: false,
  };

  const todoElement = createTodo(todoData);

  todoSection.addItem(todoElement);

  todoCounter.updateTotal(true);
});

addTodoPopup.setEventListeners();

addButton.addEventListener("click", () => {
  addTodoPopup.open();
});

const formValidator = new FormValidator(
  validationConfig,
  document.querySelector(".popup__form"),
);

formValidator.enableValidation();
