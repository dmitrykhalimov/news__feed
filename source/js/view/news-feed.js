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
}
