import { Router } from "express";
import { collection_coinsController } from "../controllers/collection_coins.controller.js";

const collectioncoinsRoutes=Router({ mergeParams: true })



collectioncoinsRoutes.get("/",collection_coinsController.getCollection_coins)
collectioncoinsRoutes.post("/",collection_coinsController.post)
collectioncoinsRoutes.get("/:coin_id",collection_coinsController.getCollection_coinsByCoin_id)


export default collectioncoinsRoutes