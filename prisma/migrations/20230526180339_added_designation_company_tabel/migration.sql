-- CreateTable
CREATE TABLE "DesignationList" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "idDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DesignationList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomDesignationList" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "idDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CustomDesignationList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompanyList" (
    "id" TEXT NOT NULL,
    "customTitle" TEXT NOT NULL,
    "CustomDescription" TEXT NOT NULL,
    "idDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CompanyList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomCompanyList" (
    "id" TEXT NOT NULL,
    "customTitle" TEXT NOT NULL,
    "customDescription" TEXT NOT NULL,
    "idDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CustomCompanyList_pkey" PRIMARY KEY ("id")
);
