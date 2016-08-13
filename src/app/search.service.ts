import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class SearchService {

  keyword: string;

  keyword_default = "test";

  articles;


  constructor(private http: Http) {
    this.getArticles();
  }

  doSearch(keyword: string) {
    this.keyword = keyword;
    this.getArticles();
  }

  getArticles(){
    this.http.get('/api/articles.json')
      .subscribe(
      (data) => {
        this.articles = data.json();
      });
  }
}
