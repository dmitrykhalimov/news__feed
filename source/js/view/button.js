import Abstract from "./abstract";

const createTemplate = () => {
  return `<button class="news__button news__button--opened">
  <span>Новости</span>
  <span>14 / 14 непрочитано</span>
  <span></span>
</button>`;
};

export default class Button extends Abstract {
  constructor() {
    super();
    this._element = null;
    this._createTemplate = createTemplate();
  }
}
