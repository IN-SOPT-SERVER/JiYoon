import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  const user = '지윤';
  return res.status(200).json({
    status: 200,
    message: '유저 조회 성공',
    data: user,
  });
});

module.exports = router;
