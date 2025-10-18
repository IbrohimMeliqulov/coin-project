import { Router } from "express";
import { commentsController } from "../controllers/comments.controller.js";


const commentsRouter=Router({mergeParams:true})


commentsRouter.post("/",commentsController.post)
commentsRouter.get("/",commentsController.getComments)



export default commentsRouter