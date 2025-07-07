import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface JwtPayload {
  id: string;
  // Adicione mais campos se você colocar no token
}

export const authenticate = (req: Request & { user?: JwtPayload }, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "Token não fornecido" });
    return; // <- garante que a função termina aqui
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: "Token inválido" });
    return; // <- aqui também
  }
};
