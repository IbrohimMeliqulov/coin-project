import { Router } from "express";
import { tradesController } from "../controllers/trades.controller.js";
import { authenticateToken } from "../middleware/authorization.js";
import { validationfactory } from "../middleware/validation.js";
import { tradesUpdateValidation, tradesValidation } from "../validation/tradesvalidation.js";

const tradesRouter = Router({ mergeParams: true })

tradesRouter.get("/", tradesController.getTrades)
tradesRouter.get("/:id", authenticateToken, tradesController.getTradeById)
tradesRouter.post("/", authenticateToken, validationfactory(tradesValidation), tradesController.post)
tradesRouter.put("/:id", authenticateToken, validationfactory(tradesUpdateValidation), tradesController.update)
tradesRouter.delete("/:id", authenticateToken, tradesController.delete)



export default tradesRouter