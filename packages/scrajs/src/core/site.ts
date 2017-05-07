import * as http from 'http';

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
}