import {createElement} from "../utils/render";

export default class Abstract {
  constructor() {
    this._element = null;
    this._createTemplate = () => {
      return `<button class="news__button news__button--opened">
      <span>Новости</span>
      <span>14 / 14 непрочитано</span>
      <span></span>
    </button>`;
    };
  }

  getTemplate() {
    return this._createTemplate;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }
}
