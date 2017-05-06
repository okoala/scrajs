import { ICollectorPipeline } from './collectorPipeline';
import ResultItems from '../resultItems';
import Task from '../task';

export default class ResultItemsCollectorPipeline implements ICollectorPipeline<ResultItems> {
  private collector: Array<ResultItems> = new Array<ResultItems>();

  public process(resultItems: ResultItems, task: Task) {
    this.collector.push(resultItems);
  }

  public getCollected(): Array<ResultItems> {
    return this.collector;
  }
}