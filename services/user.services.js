import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Get All User Services
export const getAllUserServices = async () => {
  const allUsers = await prisma.user.findMany();

  if (JSON.stringify(allUsers) === "[]") {
    throw new Error("No users found");
  }

  return allUsers;
};

// Get Unique User Services
export const getUniqueUserServices = async (reqData) => {
  const uniqueUser = await prisma.user.findUnique({
    where: {
      id: reqData,
    },
  });

  if (!uniqueUser) {
    throw new Error("No user found");
  }

  return uniqueUser;
};

// Create New User
export const addUserServices = async (reqData) => {
  const resData = prisma.user.create({
    data: {
      ...reqData,
    },
  });
  return await resData;
};

// Update Unique User
export const updateUserServices = async (reqData) => {
  const resData = prisma.user.update({
    where: { id: reqData.id },
    data: { ...reqData },
  });
  return await resData;
};

// Delete Unique User
export const deleteUserServices = async (reqData) => {
  const resData = prisma.user.delete({
    where: { id: reqData },
  });
  return await resData;
};
