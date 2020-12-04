import {createElement} from "../utils/render";

const createTemplate = () => {
  return `<button class="news__button news__button--opened">
  <span>Новости</span>
  <span>14 / 14 непрочитано</span>
  <span></span>
</button>`;
};

export default class Button {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }
}
