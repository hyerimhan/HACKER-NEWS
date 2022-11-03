import { NewsFeed, NewsDetail } from '../types';

export class Api {
  url: string;
  ajax: XMLHttpRequest;

  constructor(url: string) {
    this.ajax = new XMLHttpRequest();
    this.url = url;
  }

  getRequest<AjaxResponse>(): AjaxResponse {
    this.ajax.open('GET', this.url, false);
    // 데이터 가져오기
    this.ajax.send();

    return JSON.parse(this.ajax.response)
  }
}

export class NewsFeedApi extends Api {
  getData(): NewsFeed[] {
    return this.getRequest<NewsFeed[]>();
  }
}

export class NewsDetailApi extends Api {
  getData(): NewsDetail {
    return this.getRequest<NewsDetail>();
  }
}