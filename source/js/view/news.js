import Abstract from "./abstract";

const createButton = () => {
  return `<section class="news__feed">
    <article class="news__item">
      <h3>В деревне Бабкино небывалый урожай капусты</h3>
      <div class="news__details">
        <b>Валерий Петриченко</b>
        <time datetime="2001-05-15 19:00">15 мая</time>
        <span>Не прочитано</span>
        <button>Читать далее</button>
      </div>
    </article>
    <article class="news__item">
      <h3>Спортивная битва переросла в массовую драку</h3>
      <div class="news__details">
        <b>Алина Ткачева</b>
        <time datetime="2001-05-15 19:00">15 мая</time>
        <span>Не прочитано</span>
        <button>Читать далее</button>
        <div class="news__text">
          <p>Небывалым скандалом окончилась футбольная игра между футбольными клубами “Факел” и “Пламя”. На 85 минуте в ворота гостей был назначен пенальти.</p>
          <p>Полузащитник гостей приготовился ударить по мячу, но озорной пес Тузик схватил его за бутсу, снял с ноги и был таков.</p>
        </div>
      </div>
    </article>
    <article class="news__item">
      <h3>В деревне Бабкино небывалый урожай капусты</h3>
      <div class="news__details">
        <b>Алина Ткачева</b>
        <time datetime="2001-05-15 19:00">15 мая</time>
        <span>Не прочитано</span>
        <button>Читать далее</button>
      </div>
    </article>
  </section>`;
};

export default class News extends Abstract {
  constructor() {
    super();
    this._element = null;
    this._createTemplate = createButton();
  }
}
