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

    this._checkbox = this._element.querySelector(".todo__completed");
    this._deleteButton = this._element.querySelector(".todo__delete-btn");
    this._todoName = this._element.querySelector(".todo__name");

    const label = this._element.querySelector(".todo__label");

    this._todoName.textContent = this._data.name;

    this._checkbox.id = this._data.id;
    label.setAttribute("for", this._data.id);

    if (this._data.completed) {
      this._checkbox.checked = true;
      this._todoName.classList.add("todo__name_completed");
    }

    this._setEventListeners();

    return this._element;
  }
}
