import pool from "../config/database.js";
import { MainController } from "./main.controller.js";





export const coinsController={
    post:async function(req,res,next){
        try{
            const {name,country,year,material,value}=req.body
            const query=`INSERT INTO coins(name,country,year,material,value) VALUES($1,$2,$3,$4,$5) RETURNING *`
            const {rows}=await pool.query(query,[name,country,year,material,value])
            return res.status(200).send({
                message:`Successfully created`,
                data:rows
            }) 
        }catch(err){
            return next(err)
        }
    },
    update:async function(req,res,next){
        try{
            const result= MainController.update(req,res,"coins",id,next)
            return result 
        }catch(err){
            return next(err)
        }
    },
    delete:async function(req,res,next){
        try{
            const id=req.params.id
            const result=MainController.delete(res,"coins",id,next)
            return result
        }catch(err){
            return next(err)
        }
    },
    getCoins:async function(req,res,next){
        try{
            const result=MainController.pagination(req,res,next,"coins")
            return result
        }catch(err){
            return next(err)
        }
    },
    findOneCoin:async function(req,res,next){
        try{
            const id=req.params.id
            const result=MainController.findone(res,"coins",id,next)
            return result
        }catch(err){
            return next(err)
        }
    }
}
