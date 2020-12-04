import {render, RenderPosition} from "../utils/render";
import Button from "../view/button";
import Container from "../view/news-container";
import News from "../view/news";

export default class NewsFeed {
  constructor(newsBlock) {
    this._newsBlock = newsBlock;
    this._newsContinerComponent = new Container();
    this._buttonComponent = new Button();
    this._newsComponent = new News();
  }

  _renderContainer() {
    render(this._newsBlock, this._newsContinerComponent.getElement(), RenderPosition.AFTERBEGIN);
  }

  _renderButton() {
    render(this._newsContinerComponent.getElement(), this._buttonComponent.getElement(), RenderPosition.AFTERBEGIN);
  }

  _renderNews() {
    render(this._newsContinerComponent.getElement(), this._newsComponent.getElement(), RenderPosition.BEFOREEND);
  }

  init() {
    this._renderContainer();
    this._renderButton();
    this._renderNews();
  }
}

