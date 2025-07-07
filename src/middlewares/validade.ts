import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

export const validate = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      res.status(400).json({
        error: "Erro de validação",
        issues: result.error.format()
      });
      return; // retorna nada após enviar resposta
    }

    req.body = result.data;
    next(); // continua para o próximo middleware/controller
  };
};
