import * as interactionRepository from "../repositories/interactionRepository";

export const create = async (data: any) => {
  return await interactionRepository.createInteraction(data);
};
export const getAll = async () => {
  return await interactionRepository.findAllInteractions();
}

export const findByClientId = async (clientId: string) => {
  return await interactionRepository.findInteractionsByClientId(clientId);
};

export const findByUserId = async (userId: string) => {
  return await interactionRepository.findInteractionsByUserId(userId);
};
export const findById = async (id: string) => {
  return await interactionRepository.findInteractionById(id);
};
export const update = async (id: string, data: any) => {
  return await interactionRepository.updateInteraction(id, data);
};
export const remove = async (id: string) => {
  return await interactionRepository.deleteInteraction(id);
};
export const findAll = async () => {
  return await interactionRepository.findInteractionsByUserId("");
};