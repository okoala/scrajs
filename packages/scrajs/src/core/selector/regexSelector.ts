import { ISelector } from './selector';
import RegexResult from './regexResult';
import assert from 'assert';

export default class RegexSelector implements ISelector {
  private regexStr: string;
  private regex: RegExp;
  private group: number = 1;

  constructor(regexStr: string, group?: number) {
    assert(regexStr, 'regex must not be empty');
    this.regexStr = regexStr;
    this.regex = new RegExp(this.regexStr);
    this.group = group;
  }

  private hasGroup(regexStr: string): boolean {
    return true;
  }

  public select(text: string): string {
    return this.selectGroup(text).get(this.group);
  }

  public selectList(text: string): string[] {
    const strings = [];
    const results: [RegexResult] = this.selectGroupList(text);
    results.forEach(result => {
      strings.push(result.get(this.group));
    });
    return strings;
  }

  public selectGroup(text: string): RegexResult {
    const matches = text.match(this.regex);
    if (matches) {
      return new RegexResult(matches);
    }
    return RegexResult.EMPTY_RESULT;
  }

  public selectGroupList(text: string): [RegexResult] {
    const matches = text.match(this.regex);
    if (matches) {
      const resultList = <[RegexResult]>[];
      matches.forEach(match => {
        resultList.push(new RegexResult([match]));
      })
      return resultList;
    }
    return [RegexResult.EMPTY_RESULT];
  }

  public toString(): string {
    return this.regexStr;
  }
}