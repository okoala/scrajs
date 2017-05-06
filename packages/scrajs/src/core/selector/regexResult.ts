export default class RegexResult {
  private groups: string[];
  public static EMPTY_RESULT = new RegexResult();

  constructor(groups?: string[]) {
    if (groups) {
      this.groups = groups;
    }
  }

  public get(groupId: number): string {
    if (this.groups == null) {
      return null;
    }
    return this.groups[groupId];
  }
}