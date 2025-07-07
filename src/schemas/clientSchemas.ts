import {z} from "zod";

export const createClientSchema = z.object({
    name: z.string().min(1, "Nome é obrigatório"),
    email: z.string().email("E-mail inválido").optional(),
    phone: z.string().optional(),
    company: z.string().optional(),
    position: z.string().optional(),
    status: z.enum(["LEAD", "CONTATO", "PROPOSTA", "FECHADO"]).optional(),
    observations: z.string().optional(),
    userId:z.string()
})

export const updateClientSchema = z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    company: z.string().optional(),
    position: z.string().optional(),
    status: z.enum(["LEAD", "CONTATO", "PROPOSTA", "FECHADO"]).optional(),
    observations: z.string().optional(),
    userId:z.string().optional()
})