import Abstract from "./abstract";

const createDescription = (text) => {
  return text.reduce((acc, textItem) => {
    acc += `<p>${textItem}</p>`;
    return acc;
  }, ``);

  // return `<p>Небывалым скандалом окончилась футбольная игра между футбольными клубами “Факел” и “Пламя”. На 85 минуте в ворота гостей был назначен пенальти.</p>
  // <p>Полузащитник гостей приготовился ударить по мячу, но озорной пес Тузик схватил его за бутсу, снял с ноги и был таков.</p>`;

};

const createTemplate = (heading, name, time, text) => {
  return `<article class="news__item">
      <h3>${heading}</h3>
      <div class="news__details">
        <b>${name}</b>
        <time datetime="2001-05-15 19:00">${time}</time>
        <span>Не прочитано</span>
        <button>Читать далее</button>
        <div class="news__text">
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
  }

  getTemplate() {
    return createTemplate(
        this._heading,
        this._name,
        this._time,
        this._text);
  }

  _buttonClickHandler() {

  }
}
