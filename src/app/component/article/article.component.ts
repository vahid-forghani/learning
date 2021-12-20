import { Component, OnInit } from '@angular/core';
import { DataStore } from '@aws-amplify/datastore';
import Amplify from 'aws-amplify';
import { Article } from '../../../models';
import awsmobile from '../../../aws-exports';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {

  articles: Article[] | undefined;

  constructor() {
    Amplify.configure(awsmobile);
    this.loadData().then(data => {console.log(data);this.articles = data;});
  }

  async loadData(): Promise<Article[]> {
    return await DataStore.query(Article);
  }
}
