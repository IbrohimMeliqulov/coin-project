import { Router } from "express";
import { collection_coinsController } from "../controllers/collection_coins.controller.js";

const collectionCoinsRoutes = Router({ mergeParams: true })


collectionCoinsRoutes.put("/:id", collection_coinsController.update)
collectionCoinsRoutes.delete("/:id", collection_coinsController.delete)


export default collectionCoinsRoutes