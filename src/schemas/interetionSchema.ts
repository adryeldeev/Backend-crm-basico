import {z } from "zod";

export const createInteractionSchema = z.object({
    type: z.enum(["EMAIL", "LIGACAO", "EMAIL", "PROPOSTA", "OUTROS", "WHATSAPP", "VISITA"]),
    date: z.string().refine((value) => {
        const date = new Date(value);
        return !isNaN(date.getTime());
    }, "Data inválida"),
    description:z.string().min(1, "Descrição é obrigatória"),
    result:z.string().optional(),
    clientId: z.string().min(1, "ID do cliente é obrigatório"),
    userId: z.string().min(1, "ID do usuário é obrigatório")
})

export const updateInteractionSchema = z.object({
    type: z.enum(["EMAIL", "LIGACAO", "EMAIL", "PROPOSTA", "OUTROS", "WHATSAPP", "VISITA"]).optional(),
    date: z.string().refine((value) => {
        const date = new Date(value);
        return !isNaN(date.getTime());
    }, "Data inválida").optional(),
    description:z.string().optional(),
    result:z.string().optional()

})