import { Router } from "express";
import { commentsController } from "../controllers/comments.controller.js";
import { validationfactory } from "../middleware/validation.js";
import { commentsValidation } from "../validation/commentsvalidation.js";
import { authenticateToken } from "../middleware/authorization.js";

const commentsRouter = Router({ mergeParams: true })


commentsRouter.post("/", authenticateToken, validationfactory(commentsValidation), commentsController.post)
commentsRouter.get("/", commentsController.getComments)



export default commentsRouter