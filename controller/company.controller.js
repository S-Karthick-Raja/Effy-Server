import { addCompanyServices } from "../services/company.services.js";

// Create Company Controller
export const createCompanyController = async (req, res) => {
    try {
      const reqData = req.body;
      const resData = await addCompanyServices(reqData);
  
      res.status(200).json({
        response: "success",
        message: "successfully added company",
        data: resData,
      });
    } catch (error) {
      res.status(400).json({
        response: "error",
        message: "Failed to add company",
        error: error.message,
      });
    }
  };