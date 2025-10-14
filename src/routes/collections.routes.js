import { Router } from "express";
import { collectionController } from "../controllers/collections.controller";


collectionRoutes=Router()

collectionRoutes.get("/",collectionController.getall)
collectionRoutes.get("/:id",collectionController.getone)
collectionRoutes.post("/",collectionController.post)
collectionRoutes.put("/:id",collectionController.update)
collectionRoutes.delete("/:id",collectionController.delete)


export default collectionRoutes