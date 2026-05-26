function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;

    return v.toString(16);
  });
}
export const initialTodos = [
  {
    id: uuidv4(),
    name: "Todo 1",
    date: "2026-05-24",
    completed: false,
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
