import e, { Router } from "express";
import { tagsController } from "../controllers/tags.controller.js";
import { validationfactory } from "../middleware/validation.js";
import { tagsValidation } from "../validation/tagsvalidation.js";
import { authenticateToken } from "../middleware/authorization.js";

const tagsRoutes = Router()


tagsRoutes.get("/", tagsController.getTags)
tagsRoutes.post("/", authenticateToken, validationfactory(tagsValidation), tagsController.post)
tagsRoutes.delete("/:id", authenticateToken, tagsController.delete)


export default tagsRoutes