import {
  addCompanyServices,
  deleteCompanyServices,
  getAllCompanyDataServices,
  getAllUserFromCompanyServices,
  getUniqueCompanyServices,
  updateCompanyServices,
} from "../services/company.services.js";
import ErrorResponse from "../utils/error.js";
import SuccessRequest from "../utils/success.js";

// Create Company Controller
export const createCompanyController = async (req, res) => {
  try {
    const reqData = req.body;
    const resData = await addCompanyServices(reqData);

    res.status(201).json(SuccessRequest("Company created", resData));
  } catch (error) {
    res
      .status(400)
      .json(ErrorResponse("Failed to create company", error.message));
  }
};

// Update Company Controller
export const updateCompanyController = async (req, res) => {
  try {
    const { id } = req.params;
    const { body: reqData } = req;
    reqData.id = id;

    const resData = await updateCompanyServices(reqData);

    res.status(200).json(SuccessRequest("Company updated", resData));
  } catch (error) {
    res
      .status(400)
      .json(ErrorResponse("Failed to update company", error.message));
  }
};

// Delete Company Controller
export const deleteCompanyController = async (req, res) => {
  try {
    const { id } = req.params;

    await deleteCompanyServices(id);
    res.status(204).end();
  } catch (error) {
    res
      .status(400)
      .json(ErrorResponse("Failed to delete company", error.message));
  }
};

// Get All CompanyData Controller
export const getAllCompanyDataController = async (req, res) => {
  try {
    const findAllCompanyData = await getAllCompanyDataServices();
    res
      .status(200)
      .json(
        SuccessRequest("Companies retrieved successfully", findAllCompanyData)
      );
  } catch (error) {
    res
      .status(400)
      .json(ErrorResponse("Failed to retrieve companies", error.message));
  }
};

// Get Unique CompanyData Controller
export const getUniqueCompanyDataController = async (req, res) => {
  try {
    const { id } = req.params;

    const findUniqueCompanyData = await getUniqueCompanyServices(id);
    res
      .status(200)
      .json(
        SuccessRequest("Company retrieved successfully", findUniqueCompanyData)
      );
  } catch (error) {
    res
      .status(400)
      .json(ErrorResponse("Failed to retrieve company", error.message));
  }
};


// Get All Users from company Controller
export const getAllUserFromCompanyController = async (req, res) => {
  try {

     const { id } = req.params;

    const getAllUsers = await getAllUserFromCompanyServices(id);
    res
      .status(200)
      .json(
        SuccessRequest("Users retrieved successfully", getAllUsers)
      );
  } catch (error) {
    res
      .status(400)
      .json(ErrorResponse("Failed to retrieve users", error.message));
  }
};