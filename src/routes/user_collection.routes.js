import { Router } from "express";
import { collectionController } from "../controllers/collections.controller.js";
import { authenticateToken } from "../middleware/authorization.js";


const userRouter = Router()


userRouter.get("/:user_id", authenticateToken, collectionController.getCollectionsByUserId)


export default userRouter