import { Router } from "express";
import {createInteraction, deleteInteraction, getInteractionsByClientId, getInteractionsByUserId, updateInteraction} from "../controllers/interactionController";

import { validate } from "../middlewares/validade";
import { authenticate } from "../middlewares/auth";
import { createInteractionSchema, updateInteractionSchema } from "../schemas/interetionSchema";

const router = Router();
router.post("/interaction", authenticate, validate(createInteractionSchema), createInteraction);

// Rota para buscar todas as interações do usuário autenticado
router.get('/interaction', authenticate, getInteractionsByUserId);

// Rota para buscar interações por ID do cliente
router.get('/interaction/client/:clientId', authenticate, getInteractionsByClientId);

// Rota para buscar uma interação específica por ID
// router.get('/interaction/:id', authenticate, getInteractionsByUserId);

// Rota para atualizar uma interação, autenticado e validado
router.put('/interaction/:id', authenticate, validate(updateInteractionSchema), updateInteraction);

// Rota para deletar uma interação, autenticado
router.delete('/interaction/:id', authenticate, deleteInteraction);


export default router;