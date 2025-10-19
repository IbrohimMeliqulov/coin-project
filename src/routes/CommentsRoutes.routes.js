import { Router } from "express";
import { commentsController } from "../controllers/comments.controller.js";
import { validationfactory } from "../middleware/validation.js";
import { commentsUpdateValidation } from "../validation/commentsvalidation.js";
import { authenticateToken } from "../middleware/authorization.js";

const CommentsRouter = Router({ mergeParams: true })

CommentsRouter.put("/:id", authenticateToken, validationfactory(commentsUpdateValidation), commentsController.update)
CommentsRouter.delete("/:id", authenticateToken, commentsController.delete)


export default CommentsRouter