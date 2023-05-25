import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllUserServices = async () => {
  const allUsers = await prisma.user.findMany();
  return allUsers;
};

export const addUserServices = async (reqData) => {
  const resData =  prisma.user.create({
    data: {
      ...reqData,
    },
  });
  return await resData;
};
