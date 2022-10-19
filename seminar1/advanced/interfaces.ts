export interface Member {
  name: string;
  group: string;
}

export interface Dinner {
  member: Member[];
  menu: string[];
  organize(member: Member[], menu: string[]): void;
}
