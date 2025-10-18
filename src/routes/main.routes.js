import { Router } from "express";
import userRoutes from "./users.routes.js";
import coinsRoutes from "./coins.routes.js";
import collectionCoinsRoutes from "./collection_Coins.routes.js";
import collectioncoinsRoutes from "./collectionCoins.routes.js";
// import tagsRoutes from "./tags.routes.js";
import CollectionRoutes from "./CollectionsRoutes.routes.js";
import userRouter from "./user_collection.routes.js";
import commentsRouter from "./comments.routes.js";
import CommentsRouter from "./CommentsRoutes.routes.js";


const Mainrouter=Router()


Mainrouter.use("/users",userRoutes)
Mainrouter.use("/collections",CollectionRoutes)
Mainrouter.use("/user_collections",userRouter)
Mainrouter.use("/coins",coinsRoutes)
Mainrouter.use("/collections/:id/coins",collectioncoinsRoutes)
Mainrouter.use("/collection_coins",collectionCoinsRoutes)
Mainrouter.use("/collections/:id/comments",commentsRouter)
Mainrouter.use("/comments",CommentsRouter)
// Mainrouter.use("/tags",tagsRoutes)


export default Mainrouter