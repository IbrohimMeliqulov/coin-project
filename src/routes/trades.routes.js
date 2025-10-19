import { Router } from "express";
import { tradesController } from "../controllers/trades.controller.js";


const tradesRouter=Router({mergeParams:true})

tradesRouter.get("/",tradesController.getTrades)
tradesRouter.get("/:id",tradesController.getTradeById)
tradesRouter.post("/",tradesController.post)
tradesRouter.put("/:id",tradesController.update)
tradesRouter.delete("/:id",tradesController.delete)



export default tradesRouter