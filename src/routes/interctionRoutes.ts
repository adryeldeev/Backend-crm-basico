import { Router } from "express";
import {createInteraction} from "../controllers/interactionController";

import { validate } from "../middlewares/validade";
import { createClientSchema } from "../schemas/clientSchemas";
import { authenticate } from "../middlewares/auth";

const router = Router();
router.post("/interaction", authenticate, validate(createClientSchema), createInteraction);
