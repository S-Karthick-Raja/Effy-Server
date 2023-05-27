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

// Delete Unique Company
export const deleteCompanyServices = async (reqData) => {
  const company = await prisma.company.findUnique({
    where: { id: reqData },
  });

  if (!company) {
    throw new Error("Company not found.");
  }

  // Delete Associate userInCompany Record
  await prisma.userInCompany.deleteMany({
    where: { companyId: reqData },
  });

  const deletedCompany = await prisma.company.delete({
    where: { id: reqData },
  });

  return deletedCompany;
};

// Get All Company Services
export const getAllCompanyDataServices = async () => {
  const allCompany = await prisma.company.findMany();

  if (JSON.stringify(allCompany) === "[]") {
    throw new Error("No company found");
  }

  return allCompany;
};
