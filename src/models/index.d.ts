import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ArticleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Article {
  readonly id: string;
  readonly title?: string;
  readonly content?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Article, ArticleMetaData>);
  static copyOf(source: Article, mutator: (draft: MutableModel<Article, ArticleMetaData>) => MutableModel<Article, ArticleMetaData> | void): Article;
}