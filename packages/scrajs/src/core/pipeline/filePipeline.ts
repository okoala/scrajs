import FilePersistentBase from '../utils/filePersistentBase'
import Pipeline from './pipeline'
import ResultItems from '../resultItems';
import Task from '../task';
import { join } from 'path';

/**
 * store results in files.
 *
 * @export
 * @class FilePipeline
 * @extends {FilePersistentBase}
 * @implements {IPipeline}
 */
export class FilePipeline extends FilePersistentBase implements Pipeline {
  public createFilePipeline(path: string = '/data/crawler') {
    this.setPath(path);
  }

  public process(resultItems: ResultItems, task: Task) {
    const path = join(this.path, task.getUUID());

  }
}