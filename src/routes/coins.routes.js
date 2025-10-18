import { Router } from "express";
import { coinsController } from "../controllers/coins.controller.js";
import { validate } from "../middleware/validation.js";
import { coinUpdateValidation, coinValidation } from "../validation/coinsvalidation.js";


const coinsRoutes = Router()

coinsRoutes.get("/", coinsController.getCoins)
coinsRoutes.get("/:id", coinsController.findOneCoin)
coinsRoutes.post("/", validate(coinValidation), coinsController.post)
coinsRoutes.put("/:id", validate(coinUpdateValidation), coinsController.update)
coinsRoutes.delete("/:id", coinsController.delete)


export default coinsRoutes