import Abstract from "./abstract";

const createTemplate = () => {
  return `<button class="news__button">
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
    this._callback = {};
    this._clickHandler = this._clickHandler.bind(this);

    // this._buttonShow = this.getElement().querySelector(`button`);
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().addEventListener(`click`, this._clickHandler);
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.click();

    if (!this.getElement().classList.contains(`news__button--opened`)) {
      this.getElement().classList.add(`news__button--opened`);
    } else {
      this.getElement().classList.remove(`news__button--opened`);
    }
  }
}
