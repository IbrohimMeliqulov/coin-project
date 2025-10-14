import { Router } from "express";
import { userController } from "../controllers/users.controller.js";
import { authenticateToken } from "../middleware/authorization.js";


const userRoutes=Router()


userRoutes.post("/login",userController.login)
userRoutes.post("/register",userController.register)
userRoutes.get("/",authenticateToken,userController.GetallUsers)
userRoutes.get("/:id",authenticateToken,userController.GetOne)
userRoutes.put("/:id",authenticateToken,userController.updateUser)
userRoutes.delete("/:id",authenticateToken,userController.delete)

 
export default userRoutes