import { Router } from "express";

import {createClient, deleteClient, getClientById, getClients, updateClient } from "../controllers/clientController";
import { validate } from "../middlewares/validade";
import { createClientSchema, updateClientSchema } from "../schemas/clientSchemas";
import { authenticate } from "../middlewares/auth";

const router = Router();
// Rota para criar um cliente, autenticado e validado
router.post("/client", authenticate, validate(createClientSchema), createClient); 

 // Rota para buscar todos os clientes do usuário autenticado
router.get('client', authenticate, getClients); 

router.get('/client/:id', authenticate, getClientById );

// Rota para atualizar um cliente, autenticado e validado
router.put('/client/:id', authenticate, validate(updateClientSchema), updateClient);

// Rota para deletar um cliente, autenticado
router.delete('/client/:id', authenticate, deleteClient)

export default router;