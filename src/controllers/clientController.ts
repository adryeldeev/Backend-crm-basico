import { Request, Response } from "express";
import * as clientService from "../services/clientService";

export const createClient = async (req: Request, res: Response): Promise<void> => {
  if (!req.user) {
    res.status(401).json({ error: "Usuário não autenticado" });
    return;
  }

  const userId = req.user.id; // ✅ agora tipado corretamente
  const data = {
    ...req.body,
    userId,
  };

  const client = await clientService.create(data);
  res.status(201).json(client);
};


export const getClients = async (req: Request, res: Response): Promise<void> => {
  if (!req.user) {
    res.status(401).json({ error: "Usuário não autenticado" });
    return;
  }

  const clients = await clientService.getAll(req.user.id);
  res.status(200).json(clients);
};

export const getClientById = async (req: Request, res: Response): Promise<void> => {
  if (!req.user) {
    res.status(401).json({ error: "Usuário não autenticado" });
    return;
  }

  const { id } = req.params;
  const client = await clientService.getById(id, req.user.id);

  if (!client) {
    res.status(404).json({ error: "Cliente não encontrado" });
    return;
  }

  res.status(200).json(client);
};

export const updateClient = async (req: Request & { user?: { id: string } }, res: Response): Promise<void> => {
  if (!req.user) {
    res.status(401).json({ error: "Usuário não autenticado" });
    return;
  }

  const { id } = req.params;
  const data = req.body;
  const userId = req.user.id;

  // Passa userId para garantir que atualiza só o cliente do usuário logado
  const updatedClient = await clientService.update(id, data, userId);

  if (!updatedClient) {
    res.status(404).json({ error: "Cliente não encontrado" });
    return;
  }

  res.status(200).json(updatedClient);
};

export const deleteClient = async (req: Request & { user?: { id: string } }, res: Response): Promise<void> => {
  if (!req.user) {
    res.status(401).json({ error: "Usuário não autenticado" });
    return;
  }

  const { id } = req.params;
  const userId = req.user.id;

  // Passa userId para garantir que exclui só o cliente do usuário logado
  const deletedClient = await clientService.remove(id, userId);

  if (!deletedClient) {
    res.status(404).json({ error: "Cliente não encontrado" });
    return;
  }

  res.status(204).send();
};
