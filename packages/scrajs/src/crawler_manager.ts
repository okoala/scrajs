import { EggApplication } from 'egg';
import { existsSync } from 'fs';

class CrawlerManager extends Map {
  private config;

  constructor(app: EggApplication) {
    super();
    this.config = app.config.crawler;
    this.config.root = this.config.root
      .split(/\s*,\s*/g)
      .filter(filepath => existsSync(filepath));
  }

  /**
   * 注册爬虫的各个模块
   *
   * @param {string} moduleName
   * @param {object} moduleInstance
   *
   * @memberOf CrawlerManager
   */
  registerModule(moduleName: string, moduleInstance: object) {

  }

  registerPipeline
}

export default CrawlerManager;