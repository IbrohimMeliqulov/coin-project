import { Router } from "express";
import { collection_tagsController } from "../controllers/collection_tags.controller.js";
import { validationfactory } from "../middleware/validation.js";
import { collection_tagsValidation } from "../validation/collection_tagsvalidation.js";
import { authenticateToken } from "../middleware/authorization.js";

const collection_tagsRouter = Router({ mergeParams: true })


collection_tagsRouter.get("/", collection_tagsController.get)
collection_tagsRouter.post("/", authenticateToken, validationfactory(collection_tagsValidation), collection_tagsController.post)
collection_tagsRouter.delete("/:tag_id", authenticateToken, collection_tagsController.delete)


export default collection_tagsRouter