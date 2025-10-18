import { Router } from "express";
import { commentsController } from "../controllers/comments.controller.js";
import { validationfactory } from "../middleware/validation.js";
import { commentsValidation } from "../validation/commentsvalidation.js";


const commentsRouter=Router({mergeParams:true})


commentsRouter.post("/",validationfactory(commentsValidation),commentsController.post)
commentsRouter.get("/",commentsController.getComments)



export default commentsRouter