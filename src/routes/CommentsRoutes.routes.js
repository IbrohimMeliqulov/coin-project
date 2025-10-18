import { Router } from "express";
import { commentsController } from "../controllers/comments.controller.js";
import { validationfactory } from "../middleware/validation.js";
import { commentsUpdateValidation } from "../validation/commentsvalidation.js";

const CommentsRouter=Router({mergeParams:true})

CommentsRouter.put("/:id",validationfactory(commentsUpdateValidation),commentsController.update)
CommentsRouter.delete("/:id",commentsController.delete)


export default CommentsRouter