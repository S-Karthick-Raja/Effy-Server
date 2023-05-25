import {
  addUserServices,
  getAllUserServices,
} from "../services/user.services.js";

// Get All User Controller
export const getAllUsersController = async (req, res) => {
  try {
    const findAllUsersData = await getAllUserServices();
    res.status(200).json({
      data: findAllUsersData,
      message: "Fetched all users successfully",
    });
  } catch (error) {
    res.status(400).json({
      response: "Error",
      message: "Failed to fetch users",
    });
  }
};

// Create User Controller
export const createUsersController = async (req, res) => {
  try {

    const reqData = req.body
    const resData = await addUserServices(reqData);

    res.status(200).json({
      response: "success",
      message: "successfully added user",
      data: resData,
    });
  } catch (error) {
    res.status(400).json({ response: "error", message: "Failed to add user" });
  }
};
