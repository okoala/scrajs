import cheerio from 'cheerio';
import { ISelector } from './selector';
import { IElementSelector } from './elementSelector';

abstract class BaseElementSelector implements ISelector, IElementSelector {
  public select(text?: string): string {
    if (text != null) {
      return this.selectDOMText(cheerio.load(text));
    }
    return null;
  }

  public selectList(text?: string): string[] {
    if (text != null) {
      return this.selectDOMTextList(cheerio.load(text));
    } else {
      return [];
    }
  }

  public selectElement(text?: string): CheerioElement {
    if (text != null) {
      return this.selectDOMElement(cheerio.load(text));
    }
    return null;
  }

  public selectElements(text?: string): CheerioElement[] {
    if (text != null) {
      return this.selectDOMElements(cheerio.load(text));
    } else {
      return [];
    }
  }

  public abstract selectDOMText(element: CheerioStatic): string;
  public abstract selectDOMTextList(element: CheerioStatic): string[];
  public abstract selectDOMElement(element: CheerioStatic): CheerioElement;
  public abstract selectDOMElements(element: CheerioStatic): CheerioElement[];
  public abstract hasAttribute(): boolean;
}

export default BaseElementSelector;