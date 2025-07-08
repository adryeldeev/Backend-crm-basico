import * as userRepository from "../repositories/userRepositoy";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (email: string, password: string) => {
  const user = await userRepository.findUserByEmail(email);
  if (!user) return null;

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) return null;

  // Você pode retornar o token aqui se quiser
  return user;
};

export const sendPasswordResetEmail = async (email: string) => {
  const user = await userRepository.findUserByEmail(email);
  if (!user) return null;

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: "1h" });
  const link = `http://localhost:3000/reset-password?token=${token}`;

  await userRepository.sendEmail(
    email,
    "Redefinição de Senha",
    `Clique aqui para redefinir sua senha: ${link}`
  );

  return true;
};

export const resetPassword = async (token: string, newPassword: string) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
  const user = await userRepository.findUserByEmail(decoded.id);
  if (!user) throw new Error("Usuário inválido");

  await userRepository.updatePassword(user.email, newPassword);
};

export const create = async (data: any) => {
  const existingUser = await userRepository.findUserByEmail(data.email);
  if (existingUser) throw new Error("Usuário já existe");

  return await userRepository.createUser(data);
};
export const findByEmail = async (email: string, userId: string) => {
  const user = await userRepository.findUserByEmail(email);
  if (!user || user.id !== userId) throw new Error("Usuário não encontrado ou não autorizado");

  return user;
};