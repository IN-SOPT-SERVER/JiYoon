import { Router } from 'express';
import { userController } from '../controller';
import { body } from 'express-validator';
import { auth } from '../middlewares';
const { validatorErrorChecker } = require('../middlewares/validator');
const router: Router = Router();

router.get('/:userId', auth, userController.getUserById);

router.post('/', [body('name').notEmpty(), body('email').notEmpty(), body('password').isLength({ min: 6 })], userController.createUser);
router.get('/', userController.getAllUser);
router.patch('/:userId', body('name').notEmpty(), validatorErrorChecker, userController.updateUser);
router.delete('/:userId', userController.deleteUser);
router.post('/signin', [body('email').notEmpty(), body('email').isEmail(), body('password').notEmpty(), body('password').isLength({ min: 6 })], userController.signInUser);
export default router;
