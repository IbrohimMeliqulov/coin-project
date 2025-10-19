import { Router } from "express";
import { collection_coinsController } from "../controllers/collection_coins.controller.js";
import { validationfactory } from "../middleware/validation.js";
import { coins_collectionsValidation } from "../validation/coins_collectionsvalidation.js";
import { authenticateToken } from "../middleware/authorization.js";

const collectioncoinsRoutes = Router({ mergeParams: true })



collectioncoinsRoutes.get("/", collection_coinsController.getCollection_coins)
collectioncoinsRoutes.post("/", authenticateToken, validationfactory(coins_collectionsValidation), collection_coinsController.post)
collectioncoinsRoutes.get("/:coin_id", authenticateToken, collection_coinsController.getCollection_coinsByCoin_id)


export default collectioncoinsRoutes