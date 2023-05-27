import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Create New Company
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

// Update Unique Company
export const updateCompanyServices = async (reqData) => {

  const existingCompanyName = await prisma.company.findUnique({
    where: {
      companyName: reqData.companyName,
    },
  });

  if (existingCompanyName) {
    throw new Error("Company already exists.");
  }

  const resData = prisma.company.update({
    where: { id: reqData.id },
    data: { ...reqData },
  });
  return await resData;
};
