import { Router } from "express";
import { collectionController } from "../controllers/collections.controller.js";


const userRouter=Router()


userRouter.get("/:user_id",collectionController.getCollectionsByUserId)


export default userRouter