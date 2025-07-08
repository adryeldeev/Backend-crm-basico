import * as userRepository from "../repositories/userRepositoy";

export const create = async (data: any) => {
  // validações, regras de negócio, etc.
  return await userRepository.createUser(data);
};

export const findByEmail = async (email: string, userId: string) => {
  // validações, regras de negócio, etc.
  return await userRepository.findUserByEmail(email, userId);
};