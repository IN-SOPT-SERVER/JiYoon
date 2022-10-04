import { Dinner, Member } from './interfaces';
import _ from 'lodash';

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
  menu: ['닭갈비', '치킨', '피자', '떡볶이'],

  organize(member, menu) {
    const dinnerMember: Member[] = _.shuffle(member);
    const dinnerMenu: string[] = _.shuffle(menu);

    console.log(`결과 ${dinnerMember[0].name}, ${dinnerMember[1].name} 메뉴는 ${dinnerMenu[0]}`);
  },
};

dinner.organize(dinner.member, dinner.menu);
