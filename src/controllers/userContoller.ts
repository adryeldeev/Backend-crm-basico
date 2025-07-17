import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import * as userService from "../services/userService";

export const createUser = async (req: Request, res: Response): Promise<void> => {
  const data = req.body;
  const user = await userService.create(data);
  res.status(201).json(user);
};
export const getUserByEmail = async (req: Request, res: Response): Promise<void> => {
  const { email } = req.params;
  const userId = req.user?.id; // Assume que o ID do usuário está no token JWT

  if (!userId) {
    res.status(401).json({ error: "Usuário não autenticado" });
    return;
  }

  const user = await userService.findByEmail(email, userId);
  if (!user) {
    res.status(404).json({ error: "Usuário não encontrado" });
    return;
  }

  res.status(200).json(user);
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: "E-mail e senha são obrigatórios" });
    return;
  }

  const user = await userService.login(email, password);
  if (!user) {
    res.status(401).json({ error: "E-mail ou senha inválidos" });
    return;
  }

  // Aqui você pode adicionar a lógica para gerar um token JWT
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });

  if (!token) {
    res.status(500).json({ error: "Erro ao gerar token" });
    return;
  }

  // Retorna o token e os dados do usuário
  res.status(200).json({
    message: "Login bem-sucedido",
    user: {
      id: user.id,
      email: user.email,
      name: user.name, // Supondo que o usuário tenha um campo 'name'
    },
    token, // Retorna o token JWT
  });
};

