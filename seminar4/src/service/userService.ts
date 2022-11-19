import { UserCreateDTO } from '../DTO/userDTO';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

//* userId로 유저 조회
const getUserById = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  return user;
};

const createUser = async (userCreateDTO: UserCreateDTO) => {
  const user = await prisma.user.create({
    data: {
      userName: userCreateDTO.name,
      age: userCreateDTO.age,
      email: userCreateDTO.email,
    },
  });
  return user;
};

const getAllUser = async () => {
  const user = await prisma.user.findMany();
  return user;
};

const updateUser = async (userId: number, name: string) => {
  const user = await prisma.user.update({
    where: {
      id: userId,
    },
    data: { userName: name },
  });
  return user;
};

const deleteUser = async (userId: number) => {
  const user = await prisma.user.delete({
    where: { id: userId },
  });
  return user;
};

const userService = {
  getUserById,
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
};

export default userService;
