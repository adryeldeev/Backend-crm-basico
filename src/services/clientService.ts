// src/services/clientService.ts
import * as clientRepository from "../repositories/clientRepository";

export const create = async (data: any) => {
  // validações, regras de negócio, etc.
  return await clientRepository.create(data);
};

export const getAll = async (userId: string) => {
  // validações, regras de negócio, etc.
  return await clientRepository.findAll(userId);
};

export const getById = async (id: string, userId: string) => {
  // validações, regras de negócio, etc.
  return await clientRepository.findById(id, userId);
};

export const update = async (id: string, data: any, userId: string) => {
  // validações, regras de negócio, etc.
  return await clientRepository.update(id, data, userId);
};

export const remove = async (id: string, userId: string) => {
  // validações, regras de negócio, etc.
  return await clientRepository.deleteClient(id, userId);
};