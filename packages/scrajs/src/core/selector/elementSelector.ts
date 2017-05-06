/**
 * Selector(extractor) for html elements.
 *
 * @export
 * @interface ElementSelector
 */
export interface IElementSelector {
  /**
   * Extract single result in text
   * If there are more than one result, only the first will be chosen.
   *
   * @param {String} text
   *
   * @memberOf ElementSelector
   */
  selectElement(text: string): string;

  /**
   * Extract all results in text.
   *
   * @param {String} text
   *
   * @memberOf ElementSelector
   */
  selectElements(text: string): string[];
}