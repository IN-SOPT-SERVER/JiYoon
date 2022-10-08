import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  const blog = {
    title: '쥰쥬닝의 10월 8일 일기',
    desc: '나는 오늘 서버 2차세미나를 들었다. 어제 술을 많이 마셔서 힘들다. 빨리 집가고 싶다.',
    createdAt: '2022.10.08',
  };
  return res.status(200).json({
    status: 200,
    message: '블로그 조회 성공',
    data: blog,
  });
});

module.exports = router;
