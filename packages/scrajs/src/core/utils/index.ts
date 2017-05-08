import hashIt from 'hash-it';

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