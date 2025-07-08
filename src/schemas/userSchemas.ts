import { z } from "zod";

export const createUserSchema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
  name: z.string().optional()
});

export const updateUserSchema = z.object({
  email: z.string().email().optional(),
  password: z.string().min(6).optional(),
  name: z.string().optional()
});

export const getUserByEmailSchema = z.object({
  email: z.string().email("E-mail inválido")
});

export const loginSchema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres")
});

export const updateUserPasswordSchema = z.object({
  oldPassword: z.string().min(6, "Senha antiga deve ter no mínimo 6 caracteres"),
  newPassword: z.string().min(6, "Nova senha deve ter no mínimo 6 caracteres")
});