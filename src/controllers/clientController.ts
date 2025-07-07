import { Request, Response } from "express";
import * as clientService from "../services/clientService";

export const createClient = async (req: Request, res: Response): Promise<void> => {
  if (!req.user) {
    res.status(401).json({ error: "Usuário não autenticado" });
    return;
  }

  const data = {
    ...req.body,
    userId: req.user.id,
  };

  const client = await clientService.create(data);
  res.status(201).json(client);
};
