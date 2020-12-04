import NewsFeed from "../js/presenter/feed";

const newsBlock = document.querySelector('#news');
const newsFeedPresenter = new NewsFeed(newsBlock);

newsFeedPresenter.init();
