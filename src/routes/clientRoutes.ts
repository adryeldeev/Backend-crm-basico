import { Router } from "express";

import {createClient } from "../controllers/clientController";
import { validate } from "../middlewares/validade";
import { createClientSchema } from "../schemas/clientSchemas";
import { authenticate } from "../middlewares/auth";

const router = Router();
router.post("/client", authenticate, validate(createClientSchema), createClient); 

export default router;