import { EggAppConfig } from 'egg';
import * as path from 'path';

/**
 * crawler default config
 *
 * @interface CrawlerOptions
 */
interface CrawlerOptions {
  /**
   * give a path to find the file, you can specify multiple path with `,` delimiter
   *
   * @type {string}
   * @memberOf CrawlerOptions
   */
  root: string;
}

declare module 'egg' {
  export interface EggAppConfig {
    crawler: CrawlerOptions;
  }
}

export default (appInfo: EggAppConfig) => ({
  crawler: {
    root: path.join(appInfo.baseDir, 'app/crawler')
  }
});