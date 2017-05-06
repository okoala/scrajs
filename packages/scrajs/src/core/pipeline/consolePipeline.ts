import ResultItems from '../resultItems';
import Task from '../task';

import { IPipeline } from './pipeline';
import logger from '../utils/console';


export default class ConsolePipeline implements IPipeline {
  public process(resultItems: ResultItems, task: Task) {
    logger.info('get page: ' + resultItems.getRequest().url);

  }
}