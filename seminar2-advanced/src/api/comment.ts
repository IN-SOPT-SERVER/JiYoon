import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  const comment = {
    blogId: 1,
    comment: '엄청난 하루를 보내고 있군요!',
    createdAt: '2022.10.08',
  };
  return res.status(200).json({
    status: 200,
    message: '댓글 조회 성공',
    data: comment,
  });
});

module.exports = router;
