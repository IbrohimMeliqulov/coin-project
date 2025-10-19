import { Router } from "express";
import { coinsController } from "../controllers/coins.controller.js";
import { validate } from "../middleware/validation.js";
import { coinUpdateValidation, coinValidation } from "../validation/coinsvalidation.js";
import { authenticateToken } from "../middleware/authorization.js";

const coinsRoutes = Router()

coinsRoutes.get("/", coinsController.getCoins)
coinsRoutes.get("/:id", authenticateToken, coinsController.findOneCoin)
coinsRoutes.post("/", authenticateToken, validate(coinValidation), coinsController.post)
coinsRoutes.put("/:id", authenticateToken, validate(coinUpdateValidation), coinsController.update)
coinsRoutes.delete("/:id", authenticateToken, coinsController.delete)


export default coinsRoutes