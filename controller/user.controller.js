import {
  addUserServices,
  deleteUserServices,
  getAllUserServices,
  getUniqueUserServices,
  updateUserServices,
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
export const createUserController = async (req, res) => {
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

// Update User Controller
export const updateUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const reqData = req.body;

    const FinalData = {
      ...reqData,
      id: id,
    };
    const resData = await updateUserServices(FinalData);

    res.status(200).json({
      response: "success",
      message: "successfully updated user",
      data: resData,
    });
  } catch (error) {
    res.status(400).json({
      response: "error",
      message: "Failed to update user",
      error: error,
    });
  }
};

// Delete User Controller
export const deleteUserController = async (req, res) => {
  try {
    const { id } = req.params;

    const resData = await deleteUserServices(id);
    res.status(200).json({
      response: "success",
      message: "successfully deleted user",
      data: resData,
    });
  } catch (error) {
    res.status(400).json({
      response: "error",
      message: "Failed to delete user",
      error: error,
    });
  }
};
