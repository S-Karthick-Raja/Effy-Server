import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Create New User
export const addCompanyServices = async (reqData) => {
  const existingCompany = await prisma.company.findUnique({
    where: {
      companyName: reqData.companyName,
    },
  });

  if (existingCompany) {
    throw new Error("Company already exists.");
  }

  const resData = prisma.company.create({
    data: {
      ...reqData,
    },
  });
  return await resData;
};
