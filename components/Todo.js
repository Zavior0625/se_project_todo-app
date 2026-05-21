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

    const todoNameEl = this._element.querySelector(".todo__name");
    todoNameEl.textContent = this._data.name;

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

    return this._element;
  }
}
