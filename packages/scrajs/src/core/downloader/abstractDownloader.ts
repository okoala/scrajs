import { IDownloader } from './downloader';

abstract class AbstractDownloader implements IDownloader{
  public download(url: string) {

  }

  public setThread() {

  }
}

export default AbstractDownloader;
