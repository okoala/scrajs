import { IPipeline } from './pipeline';

export interface ICollectorPipeline<T> extends IPipeline {
  getCollected(): Array<T>;
}
