import pool from "../config/database.js";
import { MainController } from "./main.controller.js";





export const collection_coinsController={
    post:async function(req,res,next){
        try{
            // const id=req.params.id
            // console.log(id)
            // const one=await pool.query(`SELECT * FROM collections WHERE id=$1`,[id])
            // if(one.rows.length===0) return res.status(404).send({message:`there aren't any collections related to this id ${id}` })
            const {collection_id,coin_id,condition,note}=req.body
            const query=`INSERT INTO collection_coins (collection_id,coin_id,condition,note) VALUES($1,$2,$3,$4) RETURNING*`
            const {rows}=await pool.query(query,[collection_id,coin_id,condition,note])
            return res.status(201).send({
                message:`Successfully created`,
                data:rows
            })
        }catch(err){
            return next(err)
        }
    },
    getCollection_coins:async function(req,res,next){
        try{
            const {id}=req.params
            const one=await pool.query(`SELECT * FROM collections WHERE id=$1`,[id])
            if(one.rows.length===0) return res.status(404).send({message:`There aren't any collections related to this id ${id}`})
            const {page=1,limit=10,filter,value}=req.query
            const pageNumber=Number(page)
            const limitNumber=Number(limit)
            const offset=(pageNumber-1)*limitNumber
            if(filter && value){
                const query=`SELECT * FROM collection_coins WHERE collection_id=$1 AND ${filter} ILIKE $2 LIMIT $3 OFFSET $4`
                const {rows}=await pool.query(query,[id,`%${value}%`,limitNumber,offset])
                return res.status(200).send({
                    page:pageNumber,
                    limit:limitNumber,
                    total:rows.length,
                    data:rows
                })
            }else{
                const query=`SELECT * FROM collection_coins WHERE collection_id=$1 LIMIT $2 OFFSET $3`
                const {rows}=await pool.query(query,[id,limitNumber,offset])
                return res.status(200).send({
                    page:pageNumber,
                    limit:limitNumber,
                    total:rows.length,
                    data:rows
                })
            }   
        }catch(err){
            return next(err)
        }
    },
    findOneCollection_coins:async function(req,res,next){
        try{
            const id=req.params.id
            const result=MainController.findone(res,"collections_coins",id,next)
            return result
        }catch(err){
            return next(err)
        }
    },
    update:async function(req,res,next){
        try{
            const id=req.params.id
            const result=MainController.update(req,res,"collection_coins",id,next)
            return result
        }catch(err){
            return next(err)
        }
    },
    delete:async function(req,res,next){
        try{
            const id=req.params.id
            const result=MainController.delete(res,"collection_coins",id,next)
            return result
        }catch(err){
            return next(err)
        }
    },
    getCollection_coinsByCoin_id:async function(req,res,next){
        try{
            const {coin_id}=req.params
            const query=`SELECT * FROM collection_coins WHERE coin_id=$1`
            const {rows}=await pool.query(query,[coin_id])
            if(rows.length===0) return res.status(404).send({message:`${coin_id} coin_id not found`})
            return res.status(200).send({
                message:"data found",
                datat:rows
            })
        }catch(err){
            return next(err)
        }
    }

}
