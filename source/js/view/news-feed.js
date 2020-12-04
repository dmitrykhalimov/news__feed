import Abstract from "./abstract";

const createButton = () => {
  return `<section class="news__feed">

  </section>`;
};

export default class NewsFeed extends Abstract {
  constructor() {
    super();
    this._createTemplate = createButton();
  }

  // если пользователь скрывает/раскрывает виджет
  toggleNewsFeed() {
    // можно конечно удалять форму, и заново рендерить, но я посчитал это менее экономичным
    if (this.getElement().classList.contains(`visually-hidden`)) {
      this.getElement().classList.remove(`visually-hidden`);
    } else {
      this.getElement().classList.add(`visually-hidden`);
    }
  }
}
