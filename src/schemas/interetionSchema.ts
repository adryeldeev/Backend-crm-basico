import {z } from "zod";

export const createInteractionSchema = z.object({
    type: z.enum(["EMAIL", "LIGACAO", "PROPOSTA", "OUTROS", "WHATSAPP", "VISITA", "REUNIAO"]),
     date: z
    .string()
    .refine((value) => !isNaN(new Date(value).getTime()), {
      message: "Data inválida",
    })
    .transform((value) => new Date(value)),
    description:z.string().min(1, "Descrição é obrigatória"),
    result:z.string().optional(),
    clientId: z.string().min(1, "ID do cliente é obrigatório"),
})

export const updateInteractionSchema = z.object({
    type: z.enum(["EMAIL", "LIGACAO", "PROPOSTA", "OUTROS", "WHATSAPP", "VISITA", "REUNIAO"]).optional(),
   date: z
    .string()
    .refine((value) => !isNaN(new Date(value).getTime()), {
      message: "Data inválida",
    }).optional(),
    description:z.string().optional(),
    result:z.string().optional()

})