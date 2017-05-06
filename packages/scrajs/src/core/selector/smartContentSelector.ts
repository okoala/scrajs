import { ISelector } from './selector';
import CxExtractor from '../utils/cxExtractor';

export default class SmartContentSelector implements ISelector {
  public select(html: string): string {
    const extractor = new CxExtractor(html);
    return extractor.getContent();
  }

  public selectList(text: string): string[] {
    throw new Error('unsupported');
  }
}