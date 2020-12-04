import {render, RenderPosition} from "../utils/render";
import Button from "../view/button";
import Container from "../view/news-container";
import NewsFeed from "../view/news-feed";
import NewsItem from "../view/news-item";
import {newsItems} from "../mocks";

export default class Feed {
  constructor(newsBlock) {
    this._newsBlock = newsBlock;
    this._newsContinerComponent = new Container();
    this._buttonComponent = new Button(this._handleNewsButtonClick);
    this._newsFeedComponent = new NewsFeed();

    this._handleNewsButtonClick = this._handleNewsButtonClick.bind(this);
  }

  _renderContainer() {
    render(this._newsBlock, this._newsContinerComponent.getElement(), RenderPosition.AFTERBEGIN);
  }

  _renderButton() {
    render(this._newsContinerComponent.getElement(), this._buttonComponent.getElement(), RenderPosition.AFTERBEGIN);
    this._buttonComponent.setClickHandler(this._handleNewsButtonClick);
  }

  _renderNews() {
    newsItems.forEach((newsItemData) => {
      const newsItem = new NewsItem(newsItemData);
      render(this._newsFeedComponent.getElement(), newsItem.getElement(), RenderPosition.BEFOREEND);
    });

    const test = new NewsItem(newsItems[0]);
    render(this._newsFeedComponent.getElement(), test.getElement(), RenderPosition.BEFOREEND);

    render(this._newsContinerComponent.getElement(), this._newsFeedComponent.getElement(), RenderPosition.BEFOREEND);
  }

  init() {
    this._renderContainer();
    this._renderButton();
    this._renderNews();
  }

  _handleNewsButtonClick() {
    this._renderNews();
  }
}

