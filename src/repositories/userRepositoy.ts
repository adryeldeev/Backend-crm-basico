import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createUser = async (data: any) => {
    return await prisma.user.create({ data });
    }

export const findUserByEmail = async (email: string, userId: string) => {
    return await prisma.user.findFirst({
        where: { email, id: userId }
    });
}



