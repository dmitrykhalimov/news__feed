import NewsFeed from "../js/presenter/feed";
import {newsItems} from "../js/mocks";

const newsBlock = document.querySelector(`#news`);
const newsFeedPresenter = new NewsFeed(newsBlock, newsItems);

fetch(`https://run.mocky.io/v3/66f3aaf3-4188-4a0a-957d-b2d8c4bc9be1`)
  .then((response) => {
    if (response.status !== 200) {
      throw new Error(`Ошибка загрузки данных с сервера: ` +
        response.status);
    }
    response.json()
      .then((news) => {
        newsFeedPresenter.init(news);
      });
  })
  .catch((err) => {
    throw new Error(`Произошла неизвестная ошибка, код ошибки:` + err);
  });

