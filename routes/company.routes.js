import { Router } from "express";
import { createCompanyController, deleteCompanyController, getAllCompanyDataController, getUniqueCompanyDataController, updateCompanyController } from "../controller/company.controller.js";

const companyRouter = Router();

companyRouter.get("/get/all/companyData", getAllCompanyDataController); // Get all CompanyData
companyRouter.get("/get/unique/:id", getUniqueCompanyDataController); // Get Unique CompanyData

companyRouter.post("/create/new/company", createCompanyController); // Create New Company
companyRouter.put("/update/unique/:id", updateCompanyController); // Update Unique Company

companyRouter.delete("/delete/unique/:id", deleteCompanyController); // Delete Unique Company


export default companyRouter;
