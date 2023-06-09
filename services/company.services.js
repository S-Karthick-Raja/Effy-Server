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

  if (existingCompanyName?.id !== reqData?.id) {
    if (existingCompanyName) {
      throw new Error("Company already exists.");
    }
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
  const allCompany = await prisma.company.findMany({
    include: {
      UserInCompany: true,
    },
  });

  if (JSON.stringify(allCompany) === "[]") {
    throw new Error("No company found");
  }

  return allCompany;
};

// Get Unique Company Services
export const getUniqueCompanyServices = async (reqData) => {
  const uniqueCompany = await prisma.company.findUnique({
    where: {
      id: reqData,
    },
    include: {
      UserInCompany: {
        include: {
          user: true,
          company: true,
        },
      },
    },
  });

  if (!uniqueCompany) {
    throw new Error("No company found.");
  }

  return uniqueCompany;
};

// Get All User from Company Services
export const getAllUserFromCompanyServices = async (reqData) => {
  const allUsers = await prisma.userInCompany.findMany({
    where: {
      companyId: reqData,
    },
    select: {
      user: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
        },
      },
    },
  });

  if (JSON.stringify(allUsers) === "[]") {
    throw new Error("No users found");
  }

  return allUsers;
};
