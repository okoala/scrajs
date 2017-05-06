/**
 * Object contains extract results.
 * It is contained in Page and will be processed in pipeline.
 *
 * @export
 * @class ResultItems
 */
export default class ResultItems {
  private fields: Map<string, any> = new Map<string, any>();
  private request: Request;
  private skip: boolean;

  public get<T>(key: string): T {
    const value = this.fields.get(key);
    if (value == null) {
      return null;
    }
    return value;
  }

  public set<T>(key: string, value: T): ResultItems {
    this.fields.set(key, value);
    return this;
  }

  public getAll(): Map<string, any> {
    return this.fields;
  }

  public getRequest(): Request {
    return this.request;
  }

  public setRequest(request: Request): ResultItems {
    this.request = request;
    return this;
  }

  public isSkip(): boolean {
    return this.skip;
  }

  public setSkip(skip: boolean) {
    this.skip = skip;
    return this;
  }
}