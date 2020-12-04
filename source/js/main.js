import NewsFeed from "../js/presenter/feed";
import {newsItems} from "./mocks";

export default class NewsWidget {
  constructor(config) {
    const {container, type, source} = config;

    this._newsBlock = document.querySelector(`#${container}`);
    this._type = type;
    this._source = source;
  }

  startFromServer() {
    fetch(this._source)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(`Ошибка загрузки данных с сервера: ` +
          response.status);
      }
      response.json()
        .then((news) => {
          const newsFeedPresenter = new NewsFeed(this._newsBlock, news);
          newsFeedPresenter.init();
        });
    })
    .catch((err) => {
      throw new Error(`Произошла неизвестная ошибка, код ошибки:` + err);
    });
  }

  startWithMocks() {
    console.log(newsItems);
    const newsFeedPresenter = new NewsFeed(this._newsBlock, newsItems);
    newsFeedPresenter.init();
  }

  init() {
    if (this._type === `server`) {
      this.startFromServer();
    } else {
      this.startWithMocks();
    }
  }
}

window.NewsWidget = NewsWidget;

