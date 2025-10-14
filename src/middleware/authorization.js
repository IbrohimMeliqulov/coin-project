import jwt from "jsonwebtoken"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

const filepath=path.join(__dirname,"token.json")




export async function tokensaving(tokendata){
    const expiresAt=Date.now()+30*1000
    const data={
        accessToken:tokendata.accessToken,
        refreshToken:tokendata.refreshToken,
        expiresAt
    }
    fs.writeFileSync(filepath,JSON.stringify(data,null,2))

    setTimeout(()=>{
        if(fs.existsSync(filepath)){
            fs.unlinkSync(filepath)
            console.log("Token o'chirildi")
        }
    },30*1000)
}



export function authenticateToken(req,res,next){
    try{
        if(!fs.existsSync(filepath)){
            return res.status(401).send({message:"Token null"})
        }
        const data=JSON.parse(fs.readFileSync(filepath,"utf-8"))
        const token=data.accessToken
        if(!token){
            return res.status(401).send({message:"No access token"})
        } 
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
            if(err) return res.status(403).send({message:err.message})
            req.user=user;
            next()
    })
    }catch(err){
        throw new Error(err)
    }
}


