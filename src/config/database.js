import pg from "pg"
import dotenv from "dotenv"
dotenv.config()


const {Pool}=pg
const pool=new Pool({
    user:process.env.DB_USER,
    database:process.env.DB_NAME,
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    password:process.env.DB_PASSWORD,
})



pool.connect()
.then(()=>console.log("You are connected to the database"))
.catch(()=>console.log("Problem occured while connecting to the database"))


export default pool