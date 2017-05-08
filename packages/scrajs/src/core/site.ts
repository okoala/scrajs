import * as http from 'http';
import { hashCode } from './utils';

export default class Site {
  private domain: string;
  private userAgent: string;
  private defaultCookies: Map<string, string> = new Map<string, string>();
  private cookies: Map<string, Map<string, string>> = new Map<string, Map<string, string>>();
  private charset: string;
  private sleepTime: number = 5000;
  private retryTimes: number = 0;
  private cycleRetryTimes: number = 0;
  private retrySleepTime = 1000;
  private timeout: number = 5000;
  private DEFAULT_STATUS_CODE_SET: Set<number> = new Set<number>();
  private acceptStatCode: Set<number> = this.DEFAULT_STATUS_CODE_SET;
  private headers: Map<string, string> = new Map<string, string>();
  private useGzip: boolean = true;


  constructor() {
    this.DEFAULT_STATUS_CODE_SET.add(Number(http.STATUS_CODES[200]));
  }

  public createInstance(): Site {
    return new Site();
  }

  /**
   * Add a cookie
   *
   * @param {string} name
   * @param {string} value
   * @returns
   *
   * @memberof Site
   */
  public addCookie(name: string, value: string, domain?: string): Site {
    if (domain) {
      if (!this.cookies.has(domain)) {
        this.cookies.set(domain, new Map());
      }
      this.cookies.get(domain).set(name, value);
    } else {
      this.defaultCookies.set(name, value);
    }
    return this;
  }

  /**
   * get cookies
   *
   * @returns {Map<string, string>}
   *
   * @memberof Site
   */
  public getCookies(): Map<string, string> {
    return this.defaultCookies;
  }

  /**
   * get all cookies;
   *
   * @returns {Map<string, Map<string, string>>}
   *
   * @memberof Site
   */
  public getAllCookies(): Map<string, Map<string, string>> {
    return this.cookies;
  }

  /**
   * set user agent
   *
   * @param {string} userAgent
   * @returns {Site}
   *
   * @memberof Site
   */
  public setUserAgent(userAgent: string): Site {
    this.userAgent = userAgent;
    return this;
  }

  /**
   * get user agent
   *
   * @returns {string}
   *
   * @memberof Site
   */
  public getUserAgent(): string {
    return this.userAgent;
  }

  /**
   * set the domain of site
   *
   * @param {string} domain
   * @returns {Site}
   *
   * @memberof Site
   */
  public setDomain(domain: string): Site {
    this.domain = domain;
    return this;
  }

  /**
   * get domain
   *
   * @returns {string}
   *
   * @memberof Site
   */
  public getDomain(): string {
    return this.domain;
  }

  /**
   * set charset
   *
   * @param {string} charset
   * @returns {Site}
   *
   * @memberof Site
   */
  public setCharset(charset: string): Site {
    this.charset = charset;
    return this;
  }

  /**
   * get charset
   *
   * @returns {string}
   *
   * @memberof Site
   */
  public getCharset(): string {
    return this.charset;
  }

  /**
   * set timeout for downloader in ms
   *
   * @param {number} timeout
   * @returns
   *
   * @memberof Site
   */
  public setTimeout(timeout: number): Site {
    this.timeout = timeout;
    return this;
  }

  /**
   * 获取超时时间
   *
   * @returns {number}
   *
   * @memberof Site
   */
  public getTimeout(): number {
    return this.timeout;
  }


  public setAcceptStatCode(acceptStatCode: Set<number>): Site {
    this.acceptStatCode = acceptStatCode;
    return this;
  }

  public getAcceptStatCode(): Set<number> {
    return this.acceptStatCode;
  }

  /**
   * Set the interval between the processing of two pages
   *
   * @param {number} sleepTime
   * @returns {Site}
   *
   * @memberof Site
   */
  public setSleepTime(sleepTime: number): Site {
    this.sleepTime = sleepTime;
    return this;
  }

  /**
   * Get the interval between the processing of two pages.
   *
   * @returns {number}
   *
   * @memberof Site
   */
  public getSleepTime(): number {
    return this.sleepTime;
  }

  /**
   * Set retry times when download fail, 0 by default.
   *
   * @param {number} retryTimes
   * @returns {Site}
   *
   * @memberof Site
   */
  public setRetryTimes(retryTimes: number): Site {
    this.retryTimes = retryTimes;
    return this;
  }

  /**
   * Get retry times immediately when download fail, 0 by default.
   *
   * @returns
   *
   * @memberof Site
   */
  public getRetryTimes(): number {
    return this.retryTimes;
  }

  /**
   * Put an Http header for downloader.
   *
   * @param {string} key
   * @param {string} value
   *
   * @memberof Site
   */
  public addHeader(key: string, value: string) {
    this.headers.set(key, value);
    return this;
  }

  /**
   * Get headers
   *
   * @returns {Map<string, string>}
   *
   * @memberof Site
   */
  public getHeaders(): Map<string, string> {
    return this.headers;
  }

  /**
   * Set cycleRetryTimes times when download fail, 0 by default.
   *
   * @param {number} cycleRetryTimes
   * @returns {Site}
   *
   * @memberof Site
   */
  public setCycleRetryTimes(cycleRetryTimes: number): Site {
    this.cycleRetryTimes = cycleRetryTimes;
    return this;
  }

  /**
   * When cycleRetryTimes is more than 0, it will add back to scheduler and try download again.
   *
   * @returns
   *
   * @memberof Site
   */
  public getCycleRetryTimes() {
    return this.cycleRetryTimes;
  }

  /**
   * Whether use gzip.
   *
   * @param {boolean} useGzip - Default is true, you can set it to false to disable gzip.
   * @returns {Site}
   *
   * @memberof Site
   */
  public setUseGzip(useGzip: boolean): Site {
    this.useGzip = useGzip;
    return this;
  }

  public isUseGzip() {
    return this.useGzip;
  }

  /**
   * Set retry sleep times when download fail, 1000 by default.
   *
   * @param {number} retrySleepTime
   * @returns {Site}
   *
   * @memberof Site
   */
  public setRetrySleepTime(retrySleepTime: number): Site {
    this.retrySleepTime = retrySleepTime;
    return this;
  }

  public getRetrySleepTime() {
    return this.retrySleepTime;
  }

  public isEquals(o: object) {
    if (this === o) return true;

    const site: Site = <Site>o;

    if (this.cycleRetryTimes != site.cycleRetryTimes) return false;
    if (this.retryTimes != site.retryTimes) return false;
    if (this.sleepTime != site.sleepTime) return false;
    if (this.timeout != site.timeout) return false;
  }

  /**
   * generator site hashCode
   *
   * @returns {number}
   *
   * @memberof Site
   */
  public hashCode(): number {
    let result = this.domain != null ? hashCode(this.domain) : 0;
    result = 31 * result + (this.userAgent != null ? hashCode(this.userAgent) : 0);
    result = 31 * result + (this.defaultCookies != null ? hashCode(this.defaultCookies) : 0);
    result = 31 * result + (this.charset != null ? hashCode(this.charset) : 0);
    result = 31 * result + this.sleepTime;
    result = 31 * result + this.retryTimes;
    result = 31 * result + this.cycleRetryTimes;
    result = 31 * result + this.timeout;
    result = 31 * result + (this.acceptStatCode != null ? hashCode(this.acceptStatCode) : 0);
    result = 31 * result + (this.headers != null ? hashCode(this.headers) : 0);
    return result;
  }
}