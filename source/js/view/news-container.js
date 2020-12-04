import {createElement} from "../utils/render";

const createTemplate = () => {
  return `<section class="news__container"></section>`;
};

export default class NewsContainer {
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
