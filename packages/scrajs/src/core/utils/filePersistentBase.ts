import * as path from 'path';
import * as fs from 'mz/fs';
/**
 * Base object of file persistence
 *
 * @export
 * @class FilePersistentBase
 */
export default class FilePersistentBase {
  protected path: string;
  static PATH_SEPERATOR: string = '/';

  public setPath(path: string) {
    this.path = path;
  }

  public getPath(path: string) {
    return this.path;
  }

  public async getFile(filepath: string) {
    return await (<any>fs).readFile(filepath, 'utf8');
  }
}