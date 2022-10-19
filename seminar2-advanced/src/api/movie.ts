import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  const movie = {
    title: '기생충',
    desc: '전원백수로 살 길 막막하지만 사이는 좋은 기택(송강호) 가족. 장남 기우(최우식)에게 명문대생 친구가 연결시켜 준 고액 과외 자리는 모처럼 싹튼 고정수입의 희망이다. 온 가족의 도움과 기대 속에 박사장(이선균) 집으로 향하는 기우. 글로벌 IT기업 CEO인 박사장의 저택에 도착하자 젊고 아름다운 사모님 연교(조여정)가 기우를 맞이한다. 그러나 이렇게 시작된 두 가족의 만남 뒤로, 걷잡을 수 없는 사건이 기다리고 있었으니…',
    playdate: '2019.05.30',
  };
  return res.status(200).json({
    status: 200,
    message: '영화 조회 성공',
    data: movie,
  });
});

module.exports = router;
