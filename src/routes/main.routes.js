import { Router } from "express";
import userRoutes from "./users.routes.js";
import collectionRoutes from "./collections.routes.js";
import coinsRoutes from "./coins.routes.js";
import collectionCoinsRoutes from "./collection_Coins.routes.js";
import collectioncoinsRoutes from "./collectioncoins.routes.js";


const Mainrouter=Router()


Mainrouter.use("/users",userRoutes)
Mainrouter.use("/collections",collectionRoutes)
Mainrouter.use("/coins",coinsRoutes)
Mainrouter.use("/collection/:id/coins",collectioncoinsRoutes)
Mainrouter.use("/collection_coins",collectionCoinsRoutes)

export default Mainrouter