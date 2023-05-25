import { Router } from "express";
import { createUsersController, getAllUsersController } from "../controller/user.controller.js";

const userRouter = Router()

userRouter.get('/get/all/usersData', getAllUsersController)
userRouter.get('/get/unique/:id', )
userRouter.post('/create/new/user', createUsersController)
userRouter.put('/update/unique/:id', )
userRouter.put('/deactivate/unique/:id', )
userRouter.delete('/delete/unique/:id', )

export default userRouter;