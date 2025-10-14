import { Router } from "express";
import { collection_coinsController } from "../controllers/collection_coins.controller.js";

const collectioncoinsRoutes=Router()


collectioncoinsRoutes.get("/",collection_coinsController.getAll)
collectioncoinsRoutes.post("/",collection_coinsController.create)


export default collectioncoinsRoutes