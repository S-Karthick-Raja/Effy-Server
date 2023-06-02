import { Router } from "express";
import {
  addUserToCompanyController,
  createUserController,
  deleteUserController,
  getAllCompanyListController,
  getAllDeactivatedUsersController,
  getAllDesignationListController,
  getAllUsersController,
  getUniqueUserController,
  migrateUserController,
  removeUserFromCompanyController,
  updateUserController,
} from "../controller/user.controller.js";

const userRouter = Router();

userRouter.get("/get/all/usersData", getAllUsersController); // Get All Users
userRouter.get("/get/all/deactivated/users", getAllDeactivatedUsersController); // Get All Users
userRouter.get("/get/unique/:id", getUniqueUserController); // Get Unique User
userRouter.post("/create/new/user", createUserController); // Create New User
userRouter.put("/update/unique/:id", updateUserController); // Update Unique User
userRouter.put("/deactivate/unique/:id", updateUserController); // Deactivate Unique User
userRouter.delete("/delete/unique/:id", deleteUserController); // Delete Unique User

userRouter.post("/assign/company", addUserToCompanyController); // Assign User To Company
userRouter.put("/migrate/:id", migrateUserController); // Migrate User
userRouter.delete("/remove/user/company", removeUserFromCompanyController) // Remove The User From Company

userRouter.get("/get/all/company/list", getAllCompanyListController) // Get all default Data Company
userRouter.get("/get/all/designation/list", getAllDesignationListController) // Get all default Data Designation


export default userRouter;
