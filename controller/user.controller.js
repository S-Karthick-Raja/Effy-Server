import {
  addUserServices,
  getAllUserServices,
  getUniqueUserServices,
} from "../services/user.services.js";

// Get All User Controller
export const getAllUsersController = async (req, res) => {
  try {
    const findAllUsersData = await getAllUserServices();
    res.status(200).json({
      response: "success",
      data: findAllUsersData,
      message: "Fetched all users successfully",
    });
  } catch (error) {
    res.status(400).json({
      response: "Error",
      message: "Failed to fetch users",
      error: error.message,
    });
  }
};

// Get Unique User Controller
export const getUniqueUserController = async (req, res) => {
  try {
    const { id } = req.params;

    console.log(id);
    const findUniqueUserData = await getUniqueUserServices(id);
    res.status(200).json({
      response: "success",
      data: findUniqueUserData,
      message: "Fetched user successfully",
    });
  } catch (error) {
    res.status(400).json({
      response: "Error",
      message: "Failed to fetch user",
      error: error.message,
    });
  }
};

// Create User Controller
export const createUsersController = async (req, res) => {
  try {
    const reqData = req.body;
    const resData = await addUserServices(reqData);

    res.status(200).json({
      response: "success",
      message: "successfully added user",
      data: resData,
    });
  } catch (error) {
    res.status(400).json({
      response: "error",
      message: "Failed to add user",
      error: error,
    });
  }
};
