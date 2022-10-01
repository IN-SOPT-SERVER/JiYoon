import { Dinner, Member } from './interfaces';

const dinner: Dinner = {
  member: [
    {
      name: '권세훈',
      group: 'ob',
    },
    {
      name: '남지윤',
      group: 'ob',
    },
    {
      name: '김혜수',
      group: 'ob',
    },
    {
      name: '이종현',
      group: 'ob',
    },
    {
      name: '박수린',
      group: 'yb',
    },
  ],
  shuffle(array): Member[] {
    array.sort(() => Math.random() - 0.5);
    return array;
  },
  organize(array): void {
    const dinnerMember: Member[] = this.shuffle(array);

    console.log(`결과 ${dinnerMember[0].name}, ${dinnerMember[1].name}`);
  },
};

dinner.organize(dinner.member);
