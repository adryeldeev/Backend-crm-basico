// src/services/clientService.ts
import * as clientRepository from "../repositories/clientRepository";

export const create = async (data: any) => {
  // validações, regras de negócio, etc.
  return await clientRepository.create(data);
};
