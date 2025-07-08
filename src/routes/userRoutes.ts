import { Router } from "express";

import { createUser, getUserByEmail } from "../controllers/userContoller";
import { createUserSchema, getUserByEmailSchema } from "../schemas/userSchemas";
import { validate } from "../middlewares/validade";

const router = Router();

// Rota para criar um usuário, validado
router.post("/user", validate(createUserSchema), createUser);

// Rota para buscar um usuário por email
router.get("/user/email/:email", validate(getUserByEmailSchema), getUserByEmail);