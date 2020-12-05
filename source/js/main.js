import NewsFeed from "../js/presenter/feed";
import {newsItems} from "./mocks";

export default class NewsWidget {
  constructor(config) {
    const {container, type, source} = config;

    this._newsBlock = document.querySelector(`#${container}`);
    this._type = type;
    this._source = source;

    this._init();
  }

  _init() {
    if (!this._newsBlock) {
      throw new Error(`Выбран несуществующий контейнер`);
    }

    switch (this._type) {
      case `server`:
        this._startFromServer();
        break;
      case `mocks`:
        this._startWithMocks(newsItems);
        break;
      default:
        throw new Error(`Некорректно указан тип работы`);
    }
  }

  _startFromServer() {
    fetch(this._source)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(`Ошибка загрузки данных с сервера: ` +
            response.status);
        }
        response.json()
          .then((news) => {
            this._renderPresenter(news);
          });
      })
      .catch((err) => {
        throw new Error(`Произошла неизвестная ошибка, код ошибки:` + err);
      });
  }

  _startWithMocks(news) {
    this._renderPresenter(news);
  }

  _renderPresenter(news) {
    const newsFeedPresenter = new NewsFeed(this._newsBlock, news);
    newsFeedPresenter.init();
  }
}

window.NewsWidget = NewsWidget;

