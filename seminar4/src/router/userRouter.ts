import { Router } from 'express';
import { userController } from '../controller';
import { body } from 'express-validator';
const { validatorErrorChecker } = require('../middlewares/validator');
const router: Router = Router();

router.get('/:userId', userController.getUserById);

router.post('/', body('name').notEmpty(), validatorErrorChecker, userController.createUser);
router.get('/', userController.getAllUser);
router.patch('/:userId', body('name').notEmpty(), validatorErrorChecker, userController.updateUser);
router.delete('/:userId', userController.deleteUser);

export default router;
