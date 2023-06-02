import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Get All User Services
export const getAllUserServices = async () => {
  const allUsers = await prisma.user.findMany({
    include: {
      UserInCompany: {
        select: {
          company: true,
          companyId: true,
          id: true,
          user: true,
          userId: true,
        },
      },
    },
  });

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
    include: {
      UserInCompany: {
        include: {
          company: true,
        },
      },
    },
  });

  if (!uniqueUser) {
    throw new Error("No user found");
  }

  return uniqueUser;
};

// Create New User
export const addUserServices = async (reqData) => {
  const existingEmail = await prisma.user.findUnique({
    where: {
      emailId: reqData.emailId,
    },
  });

  if (existingEmail) {
    throw new Error("Email already exists.");
  }

  const resData = prisma.user.create({
    data: {
      ...reqData,
    },
  });
  return await resData;
};

// Update Unique User
export const updateUserServices = async (reqData) => {
  const userData = await prisma.user.findUnique({
    where: { id: reqData.id },
  });

  if (userData.emailId !== reqData.emailId) {
    const emailExist = await prisma.user.findUnique({
      where: { emailId: reqData.emailId },
    });
    if (emailExist) {
      throw new Error("Email already exist.");
    }
  }

  if (!userData) {
    throw new Error("User not found.");
  }

  const resData = prisma.user.update({
    where: { id: reqData.id },
    data: { ...reqData },
  });
  return await resData;
};

// Delete Unique User
export const deleteUserServices = async (reqData) => {
  const userData = await prisma.user.findUnique({
    where: { id: reqData },
  });

  if (!userData) {
    throw new Error("User not found.");
  }

  // Delete Associate userInCompany Record
  await prisma.userInCompany.deleteMany({
    where: { userId: reqData },
  });

  const DeleteUser = prisma.user.delete({
    where: { id: reqData },
  });
  return await DeleteUser;
};

//  Add New User To Company Services
export const addUserToCompanyServices = async (reqData) => {
  const existingUser = await prisma.userInCompany.findUnique({
    where: {
      userId: reqData.userId,
    },
  });

  if (existingUser) {
    throw new Error("Cannot assign user to multiple company");
  }

  const resData = prisma.userInCompany.create({
    data: {
      ...reqData,
    },
  });
  return await resData;
};

// Migrate User To New Company
export const migrateUserServices = async (reqData) => {
  const resData = prisma.userInCompany.update({
    where: { userId: reqData.userId },
    data: { ...reqData },
  });
  return await resData;
};

// Remove User From Company
export const removeUserFromCompanyServices = async (reqData) => {
  console.log(reqData);
  const resData = prisma.userInCompany.delete({
    where: { userId: reqData.userId },
  });
  return await resData;
};

// Get All CompanyList Services
export const getAllCompanyServices = async () => {
  const allCompanyList = await prisma.companyList.findMany({});

  if (JSON.stringify(allCompanyList) === "[]") {
    throw new Error("No company list found");
  }

  return allCompanyList;
};

// Get All DesignationList Services
export const getAllDesignationServices = async () => {
  const allDesignationList = await prisma.designationList.findMany({});

  if (JSON.stringify(allDesignationList) === "[]") {
    throw new Error("No designation list found");
  }

  return allDesignationList;
};

// Get All User Services
export const getAllDeactivatedUserServices = async () => {
  const allUsers = await prisma.user.findMany({
    where: {
      active: false,
    },
  });

  if (JSON.stringify(allUsers) === "[]") {
    throw new Error("No deactivated users found");
  }

  return allUsers;
};


// Deactivate Unique User
export const deactivateUserServices = async (reqData) => {
  const userData = await prisma.user.findUnique({
    where: { id: reqData.id },
  });

  if (!userData) {
    throw new Error("User not found.");
  }

  const resData = prisma.user.update({
    where: { id: reqData.id },
    data: { ...reqData },
  });
  return await resData;
};