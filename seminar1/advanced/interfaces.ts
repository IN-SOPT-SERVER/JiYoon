export interface Member {
  name: string;
  group: string;
}

export interface Dinner {
  member: Member[];
  shuffle(array: Member[]): Member[];
  organize(array: Member[]): void;
}
