import { Router } from "express";
import { collection_coinsController } from "../controllers/collection_coins.controller.js";
import { validationfactory } from "../middleware/validation.js";
import { coins_collectionsUpdateValidation } from "../validation/coins_collectionsvalidation.js";

const collectionCoinsRoutes = Router({ mergeParams: true })


collectionCoinsRoutes.put("/:id", validationfactory(coins_collectionsUpdateValidation),collection_coinsController.update)
collectionCoinsRoutes.delete("/:id", collection_coinsController.delete)


export default collectionCoinsRoutes