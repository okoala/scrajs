import ITask from "./task";

export default class Spider implements ITask {
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