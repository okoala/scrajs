import { ITask } from '../task';

export interface IDownloader {
  download(request: Request, task: ITask);
  setThread(threadNum: number);
}