import {render, RenderPosition} from "../utils/render";
import Button from "../view/news";

export default class NewsFeed {
  constructor(newsBlock) {
    this._newsBlock = newsBlock;
    this._button = new Button();
  }

  _renderButton() {
    render(this._newsBlock, this._button.getElement(), RenderPosition.AFTERBEGIN);
  }

  init() {
    this._renderButton();
  }
}

