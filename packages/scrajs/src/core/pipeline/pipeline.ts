import resultItems from '../resultItems';
import task from '../task';

/**
 * Pipeline is the persistent and offline process part of crawler.<br>
 * The interface Pipeline can be implemented to customize ways of persistent.
 */
export interface IPipeline {
  process(ResultItems: resultItems, Task: task);
};
