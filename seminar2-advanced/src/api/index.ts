import express, { Router } from 'express';
const blog = require('./blog');
const user = require('./user');
const comment = require('./comment');
const movie = require('./movie');
const members = require('./members');
const router: Router = express.Router(); // express 라우팅 시스템을 받아올거!

router.use('/user', user);
router.use('/blog', blog);
router.use('/comment', comment);
router.use('/movie', movie);
router.use('/members', members);
module.exports = router; // 모듈로 반환
