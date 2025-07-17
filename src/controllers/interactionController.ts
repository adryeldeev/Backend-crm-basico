import { Request, Response } from "express";
import * as interactionService from "../services/interactionService"; // ou repository se for direto

export const createInteraction = async (req: Request, res: Response): Promise<void> => {
  if (!req.user) {
    res.status(401).json({ error: "Não autenticado" });
    return;
  }
const userId = req.user.id; // ✅ agora tipado corretamente
  const data = {
    ...req.body,
  userId
  };

  const interaction = await interactionService.create(data);

  res.status(201).json(interaction);
};


export const getInteractionsByClientId = async (req: Request, res: Response): Promise<void> => {
  const { clientId } = req.params;

  const interactions = await interactionService.findByClientId(clientId);
  res.status(200).json(interactions);
};
// Rota para buscar todas as interações do usuário autenticado

export const getInteractionsByUserId = async (req: Request, res: Response): Promise<void> => {
  if (!req.user) {
    res.status(401).json({ error: "Não autenticado" });
    return;
  }

  const interactions = await interactionService.findByUserId(req.user.id);
  res.status(200).json(interactions);
};

export const getInteractionById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  const interaction = await interactionService.findById(id);
  if (!interaction) {
    res.status(404).json({ error: "Interação não encontrada" });
    return;
  }

  res.status(200).json(interaction);
};

export const updateInteraction = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const data = req.body;

  const updatedInteraction = await interactionService.update(id, data);
  if (!updatedInteraction) {
    res.status(404).json({ error: "Interação não encontrada" });
    return;
  }

  res.status(200).json(updatedInteraction);
};

export const deleteInteraction = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  const deletedInteraction = await interactionService.remove(id);
  if (!deletedInteraction) {
    res.status(404).json({ error: "Interação não encontrada" });
    return;
  }

  res.status(204).send();
};
