import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Criar cliente (já está ok)
export const create = async (data: any) => {
  return await prisma.client.create({ data });
};

// Buscar cliente por id, verificando se pertence ao usuário
export const findById = async (id: string, userId: string) => {
  return await prisma.client.findFirst({
    where: { id, userId }
  });
};

// Buscar todos os clientes do usuário
export const findAll = async (userId: string) => {
  return await prisma.client.findMany({
    where: { userId }
  });
};

// Atualizar cliente apenas se for do usuário logado
export const update = async (id: string, data: any, userId: string) => {
  return await prisma.client.updateMany({
    where: { id, userId },
    data
  });
};

// Deletar cliente apenas se for do usuário logado
export const deleteClient = async (id: string, userId: string) => {
  return await prisma.client.deleteMany({
    where: { id, userId }
  });
}

export const getStatusDistribution = async (userId: string) => {
  return await prisma.client.groupBy({
    by: ["status"],
    where: { userId },
    _count: {
      status: true,
    },
  });
};
