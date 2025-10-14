import { Router } from "express";
import { coinsController } from "../controllers/coins.controller.js";


const coinsRoutes=Router()


coinsRoutes.get("/",coinsController.GetAll)
coinsRoutes.get("/:id",coinsController.getOne)
coinsRoutes.post("/",coinsController.create)
coinsRoutes.put("/:id",coinsController.update)
coinsRoutes.delete("/:id",coinsController.delete)


export default coinsRoutes