import NewsFeed from "../js/presenter/feed";
import {newsItems} from "../js/mocks";

const newsBlock = document.querySelector(`#news`);
const newsFeedPresenter = new NewsFeed(newsBlock, newsItems);

newsFeedPresenter.init();
