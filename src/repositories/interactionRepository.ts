import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createInteraction = async (data: any) => {
  return await prisma.interaction.create({ data });
};
export const findInteractionsByClientId = async (clientId: string) => {
  return await prisma.interaction.findMany({
    where: { clientId }, // usa a string diretamente
    include: { user: true },
  });
};
export const findInteractionsByUserId = async (userId: string) => {
  return await prisma.interaction.findMany({
    where: { userId },
    include: { client: true }, 
  });
};


export const findInteractionById = async (id: string) => {
  return await prisma.interaction.findUnique({
    where: { id },
    include: { user: true, client: true }, // Inclui os dados do usuário e cliente relacionados
    });
}
export const updateInteraction = async (id: string, data: any) => {
  return await prisma.interaction.update({
    where: { id },
    data,
  });
};

export const deleteInteraction = async (id: string) => {
  return await prisma.interaction.delete({
    where: { id },
  });
};
