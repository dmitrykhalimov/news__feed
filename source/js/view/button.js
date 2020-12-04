import Abstract from "./abstract";

const createTemplate = (allQuantity, notReadQuantity) => {
  return `<button class="news__button">
  <span>Новости</span>
  <span>${allQuantity} / ${notReadQuantity} непрочитано</span>
  <span></span>
</button>`;
};

export default class Button extends Abstract {
  constructor(allQuantity, notReadQuantity) {
    super();

    this._element = null;

    this._allQuantity = allQuantity;

    this._callback = {};
    this._clickHandler = this._clickHandler.bind(this);

    this._createTemplate = createTemplate(allQuantity, notReadQuantity);
    // this._buttonShow = this.getElement().querySelector(`button`);
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().addEventListener(`click`, this._clickHandler);
  }

  changeReaded(notReadQuantity) {
    this._qunatity = this.getElement().querySelector(`span:not(:first-child)`);
    this._qunatity.textContent = `${this._allQuantity} / ${notReadQuantity} непрочитано`;
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
