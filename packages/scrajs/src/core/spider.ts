import { ITask } from "./task";
import { IDownloader } from './downloader/downloader';
import { IPipeline } from './pipeline/pipeline';

export default class Spider implements ITask {
  protected downloader: IDownloader;
  protected pipelines: IPipeline[] = new Array<IPipeline>();


  protected uuid: string;
  protected site: string;
  /**
   * getUUID
   */
  public getUUID() {
    if (this.uuid != null) {
      return this.uuid;
    }
    if (this.site != null) {
      return this.site.getDomain();
    }
  }

  /**
   * getSite
   */
  public getSite() {
    if (this.site != null) {
      return this.site;
    }

  }
};