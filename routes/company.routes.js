import { Router } from "express";
import { createCompanyController } from "../controller/company.controller.js";

const companyRouter = Router();

companyRouter.post("/create/new/company", createCompanyController); //Create New Company

export default companyRouter;
