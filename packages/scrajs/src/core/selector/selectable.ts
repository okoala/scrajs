import { ISelector } from './selector';

export interface ISelectable {
  /**
   * select list with xpath
   *
   * @param {string} xpath
   * @returns {ISelectable}
   *
   * @memberOf ISelectable
   */
  xpath(xpath: string): ISelectable;

  /**
   * select list with css selector
   *
   * @param {string} selector
   * @param {string} attrName
   * @returns {ISelectable}
   *
   * @memberOf ISelectable
   */
  $(selector: string, attrName: string): ISelectable;

  /**
   * select list with css selecto
   *
   * @param {string} selector
   * @param {string} attrName
   * @returns {ISelectable}
   *
   * @memberOf ISelectable
   */
  css(selector: string, attrName: string): ISelectable;

  /**
   * select smart content with ReadAbility algorithm
   *
   * @returns {ISelectable}
   *
   * @memberOf ISelectable
   */
  smartContent(): ISelectable;

  /**
   * select all links
   *
   * @returns {ISelectable}
   *
   * @memberOf ISelectable
   */
  links(): ISelectable;

  /**
   * select list with regex, default group is group 1
   *
   * @param {string} regex
   * @returns {ISelectable}
   *
   * @memberOf ISelectable
   */
  regex(regex: string): ISelectable;

  /**
   * select list with regex
   *
   * @param {string} regex
   * @param {number} group
   * @returns {ISelectable}
   *
   * @memberOf ISelectable
   */
  regex(regex: string, group: number): ISelectable;

  /**
   * replace with regex
   *
   * @param {string} regex
   * @param {string} replacement
   * @returns {ISelectable}
   *
   * @memberOf ISelectable
   */
  replace(regex: string, replacement: string): ISelectable;

  /**
   * single string result
   *
   * @returns {string}
   *
   * @memberOf ISelectable
   */
  toString(): string;

  /**
   * single string result
   *
   * @returns {string}
   *
   * @memberOf ISelectable
   */
  get(): string;

  /**
   * if result exist for select
   *
   * @returns {boolean}
   *
   * @memberOf ISelectable
   */
  match(): boolean;

  /**
   * multi string result
   *
   * @returns {string[]}
   *
   * @memberOf ISelectable
   */
  all(): string[];

  /**
   * extract by JSON Path expression
   *
   * @param {string} jsonPath
   * @returns {ISelectable}
   *
   * @memberOf ISelectable
   */
  jsonPath(jsonPath: string): ISelectable;

  /**
   * extract by custom selector
   *
   * @param {ISelector} selector
   * @returns {ISelectable}
   *
   * @memberOf ISelectable
   */
  select(selector: ISelector): ISelectable;

  /**
   * extract by custom selector
   *
   * @param {ISelector} selector
   * @returns {ISelectable}
   *
   * @memberOf ISelectable
   */
  selectList(selector: ISelector): ISelectable;

  /**
   * get all nodes
   *
   * @returns {[ISelectable]}
   *
   * @memberOf ISelectable
   */
  nodes(): [ISelectable];
}