/*
  Warnings:

  - You are about to drop the column `CustomDescription` on the `CompanyList` table. All the data in the column will be lost.
  - You are about to drop the column `customTitle` on the `CompanyList` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `CustomDesignationList` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `CustomDesignationList` table. All the data in the column will be lost.
  - Added the required column `description` to the `CompanyList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `CompanyList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CustomDescription` to the `CustomDesignationList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customTitle` to the `CustomDesignationList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CompanyList" DROP COLUMN "CustomDescription",
DROP COLUMN "customTitle",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CustomDesignationList" DROP COLUMN "description",
DROP COLUMN "title",
ADD COLUMN     "CustomDescription" TEXT NOT NULL,
ADD COLUMN     "customTitle" TEXT NOT NULL;
