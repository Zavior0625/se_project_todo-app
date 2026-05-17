export default class Todo {
  constructor(data, selector) {
    this._data = data;
    this._selector = selector;
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
    });

    this._checkbox.addEventListener("change", () => {
      this._todoName.classList.toggle("todo__name_completed");
    });
  }

  getView() {
    this._element = this._getTemplate();

    this._todoName = this._element.querySelector(".todo__name");
    this._todoDate = this._element.querySelector(".todo__date");
    this._checkbox = this._element.querySelector(".todo__completed");
    this._deleteButton = this._element.querySelector(".todo__delete-btn");

    this._todoName.textContent = this._data.name;

    if (this._data.date) {
      this._todoDate.textContent = this._data.date;
    }

    this._checkbox.checked = this._data.completed;

    if (this._data.completed) {
      this._todoName.classList.add("todo__name_completed");
    }

    this._setEventListeners();

    return this._element;
  }
}
