import Task from '../task';

export interface IDownloader {
  download(request: Request, task: Task);
  setThread(threadNum: number);
}