import { Router } from "express";
import { collectionController } from "../controllers/collections.controller.js";
import { validationfactory } from "../middleware/validation.js";
import { collectionsUpdateValidation, collectionsValidation } from "../validation/collectionsvalidation.js";
import { authenticateToken } from "../middleware/authorization.js";

const CollectionRoutes = Router()

CollectionRoutes.get("/", collectionController.getCollections)
CollectionRoutes.get("/:id", authenticateToken, collectionController.getOne)
CollectionRoutes.post("/", authenticateToken, validationfactory(collectionsValidation), collectionController.post)
CollectionRoutes.put("/:id", authenticateToken, validationfactory(collectionsUpdateValidation), collectionController.update)
CollectionRoutes.delete("/:id", authenticateToken, collectionController.delete)


export default CollectionRoutes