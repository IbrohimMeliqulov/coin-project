import { Router } from "express";
import { collection_coinsController } from "../controllers/collection_coins.controller.js";
import { validationfactory } from "../middleware/validation.js";
import { coins_collectionsUpdateValidation } from "../validation/coins_collectionsvalidation.js";
import { authenticateToken } from "../middleware/authorization.js";

const collectionCoinsRoutes = Router({ mergeParams: true })


collectionCoinsRoutes.put("/:id", authenticateToken, validationfactory(coins_collectionsUpdateValidation), collection_coinsController.update)
collectionCoinsRoutes.delete("/:id", authenticateToken, collection_coinsController.delete)


export default collectionCoinsRoutes