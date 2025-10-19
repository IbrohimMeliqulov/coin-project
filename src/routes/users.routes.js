import { Router } from "express";
import { userController } from "../controllers/users.controller.js";
import { authenticateToken } from "../middleware/authorization.js";
import { registerUserSchema } from "../validation/uservalidation.js";
import { validate } from "../middleware/validation.js"

const userRoutes = Router()


userRoutes.post("/login", userController.login)
userRoutes.post("/register", validate(registerUserSchema), userController.register)
userRoutes.get("/", userController.getUsers)
userRoutes.get("/:id", authenticateToken, userController.getOne)
userRoutes.put("/:id", authenticateToken, userController.updateUser)
userRoutes.delete("/:id", authenticateToken, userController.delete)


export default userRoutes