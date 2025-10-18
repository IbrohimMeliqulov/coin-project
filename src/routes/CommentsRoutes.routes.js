import { Router } from "express";
import { commentsController } from "../controllers/comments.controller.js";

const CommentsRouter=Router({mergeParams:true})

CommentsRouter.put("/:id",commentsController.update)
CommentsRouter.delete("/:id",commentsController.delete)


export default CommentsRouter