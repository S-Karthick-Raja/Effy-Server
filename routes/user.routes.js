import { Router } from "express";
import { createUserController, deleteUserController, getAllUsersController, getUniqueUserController, updateUserController } from "../controller/user.controller.js";

const userRouter = Router()

userRouter.get('/get/all/usersData', getAllUsersController)
userRouter.get('/get/unique/:id', getUniqueUserController)
userRouter.post('/create/new/user', createUserController)
userRouter.put('/update/unique/:id', updateUserController)
userRouter.put('/deactivate/unique/:id', updateUserController)
userRouter.delete('/delete/unique/:id', deleteUserController)

export default userRouter;