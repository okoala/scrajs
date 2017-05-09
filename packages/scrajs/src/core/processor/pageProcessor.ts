import Page from '../page';
import Site from '../site';

export interface IPageProcessor {

  process(page: Page): void;
  getSite(): Site;

}