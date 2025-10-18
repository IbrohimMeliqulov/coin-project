import { Router } from "express";
import { collectionController } from "../controllers/collections.controller.js";
import { validationfactory } from "../middleware/validation.js";
import { collectionsUpdateValidation, collectionsValidation } from "../validation/collectionsvalidation.js";


const CollectionRoutes = Router()

CollectionRoutes.get("/", collectionController.getCollections)
CollectionRoutes.get("/:id", collectionController.getOne)
CollectionRoutes.post("/", validationfactory(collectionsValidation), collectionController.post)
CollectionRoutes.put("/:id", validationfactory(collectionsUpdateValidation), collectionController.update)
CollectionRoutes.delete("/:id", collectionController.delete)


export default CollectionRoutes