import { PrismaClient } from "@prisma/client";

import { CompaniesList } from "./company.js";
import { DesignationList } from "./designation.js";

const prisma = new PrismaClient();

const seed = async () => {
  await prisma.companyList.deleteMany();
  await prisma.designationList.deleteMany();

  // Designation List
  const designationPromises = [];
  for (const design of DesignationList) {
    designationPromises.push(
      prisma.designationList.create({
        data: {
          title: design,
          description: design,
        },
      })
    );
  }

  // Company List
  const companyPromises = [];
  for (const company of CompaniesList) {
    companyPromises.push(
      prisma.companyList.create({
        data: {
          title: company,
          description: company,
        },
      })
    );
  }

  await Promise.all(companyPromises);
  await Promise.all(designationPromises);
};

seed().catch(() => {
  process.exit(1);
});
