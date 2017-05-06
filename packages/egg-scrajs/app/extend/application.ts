import CrawlerManager from '../../lib/crawler_manager';
import CRAWLER = Symbol('Application#crawler');

export default {
  get crawler() {
    if (!this[CRAWLER]) {
      this[CRAWLER] = new CrawlerManager(this);
    }
    return this[CRAWLER];
  }
}