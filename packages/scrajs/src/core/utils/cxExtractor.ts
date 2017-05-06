export interface cxExtractorOptions {
  /**
   * 块区大小
   *
   * @type {number}
   * @memberOf cxExtractorOptions
   */
  blockSize?: number;
}

export default class CxExtractor {
  private content: string;
  private originLines: string[];
  private lines: string[];
  private numOfEmptyLine: number = 0;
  private indexWordCountList: number[];
  private totalWordCount: number = 0;
  private resultContent: string = '';

  public options: cxExtractorOptions;

  constructor(content: string, options?: cxExtractorOptions) {
    this.content = this.cleanContent(content);
    this.originLines = this.content.split('\n');
    this.lines = this.content.replace(/ /g, '')
      .split('\n')
      .map(line => this.cleanBlank(line));

    if (!options || !options.blockSize) {
      options = options || {}
      options.blockSize = 3;
    }

    this.options = options;

    this.process();
  }

  /**
   * 获取计算出来的正文内容
   *
   * @returns {string}
   *
   * @memberOf CxExtractor
   */
  public getContent(): string {
    return this.resultContent;
  }

  public process(): void {
    for (let i = 0; i < this.lines.length; i++) {
      let wordCount = this.lines[i].length;
      if (wordCount === 0) {
        this.numOfEmptyLine++;
      }
      for (let j = i + 1; j < i + this.options.blockSize && j < this.lines.length; j++) {
        wordCount += this.lines[j].length;
      }
      this.indexWordCountList.push(wordCount);
      this.totalWordCount += wordCount;
    }

    const threshold = this.calcThreshold();

    let isStart: boolean = false;
    let isEnd: boolean = false;
    let startAt: number;
    let endAt: number;

    for (let i = 0; i < this.indexWordCountList.length; i++) {
      if (!isStart && this.indexWordCountList[i] > threshold) {
        if (
          this.indexWordCountList[i + 1] !== 0 ||
          this.indexWordCountList[i + 2] !== 0 ||
          this.indexWordCountList[i + 3] !== 0
        ) {
          isStart = true;
          startAt = i;
          continue;
        }
      }

      if (isStart) {
        if (
          this.indexWordCountList[i] === 0 ||
          this.indexWordCountList[i + 1] === 0
        ) {
          isEnd = true;
          endAt = i;
        }
      }

      if (isEnd) {
        this.resultContent += this.originLines.slice(startAt - 1, endAt).join('\n');
        isStart = isEnd = false;
      }
    }
  }

  /**
   * 计算阈值
   *
   * @memberOf cxExtractor
   */
  public calcThreshold(): number {
    const linesLength = this.lines.length;
    const d1 = this.totalWordCount / linesLength;
    const d2 = this.numOfEmptyLine / (linesLength - this.numOfEmptyLine);
    return this.middleNum([100, d1 << (d2 >>> 1), 50]);
  }

  public middleNum(arr: number[]) {
    const orderArr = arr.sort((a, b) => {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    });
    return orderArr[Math.floor(arr.length / 2)];
  }

  public cleanContent(content: string): string {
    return content.replace(/<!--.*?-->/g, '')
      .replace(/<script.*?>[\s\S]*?<\/script>/ig, '')
      .replace(/<style.*?>[\s\S]*?<\/style>/ig, '')
      .replace(/<[\s\S]*?>|[\t\r\f\v]/g, '')
  }

  public cleanBlank(content: string): string {
    return content.replace(/\s+/g, '')
  }
}