import hashIt from 'hash-it';
import _isEqual from 'lodash.isequal';

/**
 * implementation of Java’s String.hashCode Method.
 *
 * @export
 * @param {string} str
 * @returns {number}
 */
export function hashCode(obj: any): number {
  return hashIt(obj);
}

/**
 * compare values of any type for equility
 *
 * @export
 * @returns
 */
export function isEqual(value: any, other: any): boolean {
  return _isEqual(value, other);
}