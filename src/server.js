import express from "express"
import ErrorHandler from "./middleware/errorHandler.js"
import Mainrouter from "./routes/main.routes.js"

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3000

app.use("/", Mainrouter)





app.use(ErrorHandler)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})