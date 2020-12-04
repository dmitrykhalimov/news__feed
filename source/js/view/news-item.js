import Abstract from "./abstract";

const createDescription = (text) => {
  return text.reduce((acc, textItem) => {
    acc += `<p>${textItem}</p>`;
    return acc;
  }, ``);
};

const createTemplate = (heading, name, time, text) => {
  return `<article class="news__item">
      <h3>${heading}</h3>
      <div class="news__details">
        <b>${name}</b>
        <time datetime="2001-05-15 19:00">${time}</time>
        <span>Не прочитано</span>
        <button>Читать далее</button>
        <div class="news__text visually-hidden">
          ${createDescription(text)}
        </div>
      </div>
    </article>`;
};

export default class NewsItem extends Abstract {
  constructor(newsItem) {
    super();

    this._heading = newsItem.heading;
    this._name = newsItem.name;
    this._time = newsItem.date;
    this._isRead = newsItem.isRead;
    this._text = newsItem.text;

    this._newsTextContainer = this.getElement().querySelector(`.news__text`);

    this._buttonClickHandler = this._buttonClickHandler.bind(this);

    this.getElement().querySelector(`button`).addEventListener(`click`, this._buttonClickHandler);
  }

  getTemplate() {
    return createTemplate(
        this._heading,
        this._name,
        this._time,
        this._text);
  }

  _buttonClickHandler() {
    if (this._newsTextContainer.classList.contains(`visually-hidden`)) {
      this._newsTextContainer.classList.remove(`visually-hidden`)
    } else {
      this._newsTextContainer.classList.add(`visually-hidden`)
    }
  }
}
