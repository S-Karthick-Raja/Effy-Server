import {
  addUserServices,
  addUserToCompanyServices,
  deactivateUserServices,
  deleteUserServices,
  getAllCompanyServices,
  getAllDeactivatedUserServices,
  getAllDesignationServices,
  getAllUserServices,
  getUniqueUserServices,
  migrateUserServices,
  removeUserFromCompanyServices,
  updateUserServices,
} from "../services/user.services.js";
import ErrorResponse from "../utils/error.js";
import SuccessRequest from "../utils/success.js";

// Get All User Controller
export const getAllUsersController = async (req, res) => {
  try {
    const findAllUsersData = await getAllUserServices();
    res
      .status(200)
      .json(SuccessRequest("Users retrieved successfully", findAllUsersData));
  } catch (error) {
    res
      .status(400)
      .json(ErrorResponse("Failed to retrive company", error.message));
  }
};

// Get Unique User Controller
export const getUniqueUserController = async (req, res) => {
  try {
    const { id } = req.params;

    const findUniqueUserData = await getUniqueUserServices(id);
    res
      .status(200)
      .json(SuccessRequest("User retrieved successfully", findUniqueUserData));
  } catch (error) {
    res
      .status(400)
      .json(ErrorResponse("Failed to retrive user", error.message));
  }
};

// Create User Controller
export const createUserController = async (req, res) => {
  try {
    const reqData = req.body;
    const resData = await addUserServices(reqData);

    res.status(201).json(SuccessRequest("User created", resData));
  } catch (error) {
    res.status(400).json(ErrorResponse("Failed to create user", error.message));
  }
};

// Update User Controller
export const updateUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const reqData = req.body;

    const FinalData = {
      ...reqData,
      id: id,
    };
    const resData = await deactivateUserServices(FinalData);

    res.status(200).json(SuccessRequest("User updated", resData));
  } catch (error) {
    res.status(400).json(ErrorResponse("Failed to update user", error.message));
  }
};

// Delete User Controller
export const deleteUserController = async (req, res) => {
  try {
    const { id } = req.params;

    await deleteUserServices(id);
    res.status(204).end();
  } catch (error) {
    res.status(400).json(ErrorResponse("Failed to delete user", error.message));
  }
};

// Add User To Company Controller
export const addUserToCompanyController = async (req, res) => {
  try {
    const reqData = req.body;
    const resData = await addUserToCompanyServices(reqData);

    res.status(201).json(SuccessRequest("User added to company", resData));
  } catch (error) {
    res
      .status(400)
      .json(ErrorResponse("Failed to add user to company", error.message));
  }
};

// Migrate User Controller
export const migrateUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const reqData = req.body;

    const FinalData = {
      ...reqData,
      userId: id,
    };
    const resData = await migrateUserServices(FinalData);

    res.status(200).json(SuccessRequest("User migrated", resData));
  } catch (error) {
    res
      .status(400)
      .json(ErrorResponse("Failed to migrate user", error.message));
  }
};

// Remove User From Company Controller
export const removeUserFromCompanyController = async (req, res) => {
  try {
    const reqData = req.body;

    await removeUserFromCompanyServices(reqData);
    res.status(204).end();
  } catch (error) {
    res
      .status(400)
      .json(ErrorResponse("Failed to remove user from company", error.message));
  }
};


// Get All Company List
export const getAllCompanyListController = async (req, res) => {
  try {
    const findAllCompanyData = await getAllCompanyServices();
    res
      .status(200)
      .json(SuccessRequest("CompanyList retrieved successfully", findAllCompanyData));
  } catch (error) {
    res
      .status(400)
      .json(ErrorResponse("Failed to retrive companyList", error.message));
  }
};

// Get All Designation List
export const getAllDesignationListController = async (req, res) => {
  try {
    const findAllDesignationData = await getAllDesignationServices();
    res
      .status(200)
      .json(SuccessRequest("DesignationList retrieved successfully", findAllDesignationData));
  } catch (error) {
    res
      .status(400)
      .json(ErrorResponse("Failed to retrive DesignationList", error.message));
  }
};

// Get All Deactivated User Controller
export const getAllDeactivatedUsersController = async (req, res) => {
  try {
    const findAllUsersData = await getAllDeactivatedUserServices();
    res
      .status(200)
      .json(SuccessRequest("Deactivated users retrieved", findAllUsersData));
  } catch (error) {
    res
      .status(400)
      .json(ErrorResponse("Failed to retrive deactivated users", error.message));
  }
};