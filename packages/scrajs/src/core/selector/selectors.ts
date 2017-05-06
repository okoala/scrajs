import RegexSelector from './regexSelector';
import SmartContentSelector from './SmartContentSelector';

abstract class Selectors {
  public static regex(expr: string, group?: number): RegexSelector {
    return new RegexSelector(expr, group);
  }

  public static smartContent(): SmartContentSelector {
    return new SmartContentSelector();
  }


}

export default Selectors;
