export interface ISelector {
  select(text: string): string;
  selectList(text: string): string[];
}