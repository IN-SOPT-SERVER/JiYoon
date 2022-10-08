import express, { Request, Response, Router } from 'express';
import { Member } from '../interfaces/member';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  const members: Member[] = [
    {
      name: '권세훈',
      group: 'ob',
      age: 24,
    },
    {
      name: '남지윤',
      group: 'ob',
      age: 23,
    },
    {
      name: '김혜수',
      group: 'ob',
      age: 25,
    },
    {
      name: '이종현',
      group: 'ob',
      age: 26,
    },
    {
      name: '박수린',
      group: 'yb',
      age: 21,
    },
  ];
  return res.status(200).json({
    status: 200,
    message: '멤버 조회 성공',
    data: members,
  });
});

module.exports = router;
