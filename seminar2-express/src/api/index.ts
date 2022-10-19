import express, { Router } from 'express';
const user = require('./user');
const router: Router = express.Router(); // express 라우팅 시스템을 받아올거!

router.use('/user', user);

module.exports = router; // 모듈로 반환
