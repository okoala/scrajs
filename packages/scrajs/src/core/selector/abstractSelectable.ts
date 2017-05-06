import { ISelectable } from './selectable';
import { ISelector } from './selector';

abstract class AbstractSelectable implements ISelectable {
  protected abstract getSourceTexts(): string[];
  protected abstract $(selector: string, attrName?: string): any;
  protected abstract xpath(xpath: string): ISelectable;

  public css(selector: string, attrName?: string): ISelectable {
    return this.$(selector, attrName);
  }

  protected _select(selector: ISelector, strings: string[]) {
    const results = [];
    strings.forEach(str => {
      const result = selector.select(str);
      if (result != null) {
        results.push(result);
      }
    });
    return results;
  }

  protected _selectList(selector: ISelector, strings: string[]) {
    const results = [];
    strings.forEach(str => {
      const result = selector.selectList(str);
      if (result != null) {
        results.concat(result);
      }
    });
    return results;
  }

  public all(): string[] {
    return this.getSourceTexts();
  }

  public jsonPath(jsonPath: string): ISelectable {
    throw new Error('unsupported!');
  }

  public get(): string {
    const list = this.all();
    if (list.length) {
      return list[0]
    } else {
      return null;
    }
  }

  public select(selector: ISelector) {
    return this._select(selector, this.getSourceTexts());
  }

  public selectList(selector: ISelector) {
    return this._selectList(selector, this.getSourceTexts());
  }

  public regex(regex: string) {

  }
}

export default AbstractSelectable;