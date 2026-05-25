export default class Todo {
  constructor(data, selector, handlers) {
    this._data = data;
    this._selector = selector;

    this._handleCheckboxChange = handlers.handleCheckboxChange;
    this._handleDelete = handlers.handleDelete;
  }

  _getTemplate() {
    return document
      .querySelector(this._selector)
      .content.querySelector(".todo")
      .cloneNode(true);
  }

  _setEventListeners() {
    this._deleteButton.addEventListener("click", () => {
      this._element.remove();

      this._handleDelete(this._checkbox.checked);
    });

    this._checkbox.addEventListener("change", () => {
      this._todoName.classList.toggle("todo__name_completed");

      this._handleCheckboxChange(this._checkbox.checked);
    });
  }

  getView() {
    this._element = this._getTemplate();

    this._todoName = this._element.querySelector(".todo__name");
    this._todoName.textContent = this._data.name;

    const dateEl = this._element.querySelector(".todo__date");

    if (dateEl && this._data.date) {
      const date = new Date(this._data.date);

      date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

      dateEl.textContent = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }

    this._checkbox = this._element.querySelector(".todo__completed");
    this._deleteButton = this._element.querySelector(".todo__delete-btn");

    if (this._data.completed) {
      this._checkbox.checked = true;

      this._todoName.classList.add("todo__name_completed");
    }

    this._setEventListeners();

    return this._element;
  }
}
