import pool from "../config/database.js";
import { updateCoinStatus } from "../helpers/utils.js";
import { MainController } from "./main.controller.js";



export const tradesController={
    post:async function(req,res,next){
        try{
            const {from_user_id,to_user_id,coin_id}=req.body
            const query=`INSERT INTO trades (from_user_id,to_user_id,coin_id) VALUES($1,$2,$3) RETURNING *`
            const {rows}=await pool.query(query,[from_user_id,to_user_id,coin_id])
            return res.status(201).send({
                message:"Successfully created",
                data:rows
            })
        }catch(err){
            return next(err)
        }
    },
    getTrades:async function(req,res,next){
        try{
            const result=MainController.pagination(req,res,next,"trades")
            return result
        }catch(err){
            return next(err)
        }
    },
    getTradeById:async function(req,res,next){
        try{
            const id=req.params.id
            const result=MainController.findone(res,"trades",id,next)
            return result
        }catch(err){
            return next(err)
        }
    },
    update:async function(req,res,next){
        try{
            const id=req.params.id
            const{status}=req.body
            const one=await pool.query(`SELECT * FROM trades WHERE id=$1`,[id])
            if(one.rows.length===0) return res.status(404).send({message:`${id} trade not found`})
            const trade=one.rows
            console.log(trade)
            if(status.toLowerCase()==="accepted"){
                const newtrade=await updateCoinStatus(trade,req,res,next)
                return newtrade
            }
        }catch(err){
            return next(err)
        }
    },
    delete:async function(req,res,next){
        try{
            const id=req.params.id
            const result=MainController.delete(res,"trades",id,next)
            return result
        }catch(err){
            return next(err)
        }
    }
}