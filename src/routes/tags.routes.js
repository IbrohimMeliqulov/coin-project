import e, { Router } from "express";
import { tagsController } from "../controllers/tags.controller.js";
import { validationfactory } from "../middleware/validation.js";
import { tagsValidation } from "../validation/tagsvalidation.js";


const tagsRoutes=Router()


tagsRoutes.get("/",tagsController.getTags)
tagsRoutes.post("/",validationfactory(tagsValidation),tagsController.post)
tagsRoutes.delete("/:id",tagsController.delete)


export default tagsRoutes