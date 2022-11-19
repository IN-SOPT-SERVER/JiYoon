import { Request, Response } from 'express';
import { UserCreateDTO } from '../DTO/userDTO';
import { userService } from '../service';

const getUserById = async (req: Request, res: Response) => {
  const { userId } = req.params;

  const data = await userService.getUserById(+userId);

  if (!data) {
    return res.status(404).json({ status: 404, message: 'NOT_FOUND' });
  }
  return res.status(200).json({ status: 200, message: '유저 조회 성공', data });
};

const createUser = async (req: Request, res: Response) => {
  const userCreateDTO: UserCreateDTO = req.body;
  const data = await userService.createUser(userCreateDTO);

  if (!data) {
    return res.status(404).json({ status: 404, message: 'NOT_FOUND' });
  }
  return res.status(200).json({ status: 200, message: '유저 생성 성공', data });
};

const getAllUser = async (req: Request, res: Response) => {
  const data = await userService.getAllUser();

  if (!data) {
    return res.status(404).json({ status: 404, message: 'NOT_FOUND' });
  }
  return res.status(200).json({ status: 200, message: '유저 생성 성공', data });
};

const updateUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { name } = req.body;

  const data = await userService.updateUser(+userId, name);

  if (!data) {
    return res.status(404).json({ status: 404, message: 'NOT_FOUND' });
  }
  return res.status(200).json({ status: 200, message: '유저 업데이트 성공', data });
};

const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;

  const data = await userService.deleteUser(+userId);

  if (!data) {
    return res.status(404).json({ status: 404, message: 'NOT_FOUND' });
  }
  return res.status(200).json({ status: 200, message: '유저 삭제 성공', data });
};
const userController = {
  getUserById,
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
};

export default userController;
