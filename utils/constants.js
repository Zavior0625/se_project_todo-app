export const initialTodos = [
  {
    name: "Wake up",
    date: "2026-05-17",
    completed: false,
    id: "1",
  },
  {
    name: "Study JavaScript",
    date: "2026-05-18",
    completed: true,
    id: "2",
  },
];

export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
