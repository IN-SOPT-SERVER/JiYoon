//* 파트원을 소개해주는 코드 만들기 실습
/**
 * ~~는 ~살이고 ~에 살고있고 ~~를 좋아합니다.
 */

//^ 1. 서버 파트원 2-3명 소개하는 객체 만들기
const members: Member[] = [
  {
    name: '남지윤',
    age: 23,
    area: '공덕',
    like: '너',
  },
  {
    name: '전희선',
    age: 24,
    area: '산본에서 flex',
    like: '술',
  },
  {
    name: '최승빈',
    age: 24,
    area: '역곡',
    like: '남지윤',
  },
  {
    name: '이용택',
    age: 25,
    area: '성수',
    like: '떡볶이',
  },
];

//^ 2. 파트원 소개 배열에 타입으로 지정할 인터페이스 생성 및 타입 지정
interface Member {
  name: string;
  age: number;
  area: string;
  like: string;
}

//^ 3. 모든 파트원 소개 출력하기!
members.map(member => console.log(`우리조 귀요미 ${member.name}는 ${member.age}살이고 ${member.area}에 살고있고 ${member.like}를 좋아합니다.`));
