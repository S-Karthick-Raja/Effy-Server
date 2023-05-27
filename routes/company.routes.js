import { Router } from "express";
import { createCompanyController, updateCompanyController } from "../controller/company.controller.js";

const companyRouter = Router();

companyRouter.post("/create/new/company", createCompanyController); // Create New Company
companyRouter.put("/update/unique/:id", updateCompanyController); // Update Unique Company

export default companyRouter;
