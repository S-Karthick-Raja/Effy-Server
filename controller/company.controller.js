import { addCompanyServices, deleteCompanyServices, updateCompanyServices } from "../services/company.services.js";

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

  // Update Company Controller
export const updateCompanyController = async (req, res) => {
  try {
    const { id } = req.params;
    const reqData = req.body;

    const FinalData = {
      ...reqData,
      id: id,
    };
    const resData = await updateCompanyServices(FinalData);

    res.status(200).json({
      response: "success",
      message: "successfully updated company",
      data: resData,
    });
  } catch (error) {
    res.status(400).json({
      response: "error",
      message: "Failed to update company",
      error: error.message,
    });
  }
};


// Delete Company Controller
export const deleteCompanyController = async (req, res) => {
  try {
    const { id } = req.params;

    const resData = await deleteCompanyServices(id);
    res.status(200).json({
      response: "success",
      message: "successfully deleted company",
      data: resData,
    });
  } catch (error) {
    res.status(400).json({
      response: "error",
      message: "Failed to delete company",
      error: error.message,
    });
  }
};