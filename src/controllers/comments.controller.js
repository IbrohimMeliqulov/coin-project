import pool from "../config/database.js";
import { MainController } from "./main.controller.js";


export const commentsController={
    post:async function(req,res,next){
        try{
            const id=req.params.id
            const one=await pool.query(`SELECT * FROM collections WHERE id=$1`,[id])
            if(one.rows.length===0) return res.status(404).send({message:`There aren't any collections related to this id ${id}`})
            const {collection_id,user_id,text}=req.body
            const query=`INSERT INTO comments(collection_id,user_id,text) VALUES($1,$2,$3) RETURNING *`
            const {rows}=await pool.query(query,[collection_id,user_id,text])
            return res.status(201).send({
                message:"Successfully created",
                data:rows
            })            
        }catch(err){
            return next(err)
        }
    },
    getComments:async function(req,res,next){
        try{
            const id=req.params.id
            const one=await pool.query(`SELECT * FROM collections WHERE id=$1`,[id])
            if(one.rows.length===0) return res.status(404).send({message:`There aren't any collections related to this id ${id}`})
            const {page=1,limit=10,filter,value}=req.query
            const pageNumber=Number(page)
            const limitNumber=Number(limit)
            const offset=(pageNumber-1)*limitNumber
            if(filter && value){
                const query=`SELECT * FROM users WHERE comments collection_id=$1 AND ${filter} ILIKE $2 LIMIT $3 OFFSET $4`
                const {rows}=await pool.query(query,[id,`%${value}%`,limitNumber,offset])
                return res.status(200).send({
                    page:pageNumber,
                    limit:offset,
                    total:rows.length,
                    data:rows
                })
            }else{
                const query=`SELECT * FROM comments WHERE collection_id=$1 LIMIT $2 OFFSET $3`
                const {rows}=await pool.query(query,[id,limitNumber,offset])
                return res.status(200).send({
                    page:pageNumber,
                    limit:offset,
                    total:rows.length,
                    data:rows
                })
            }
        }catch(err){
            return next(err)
        }
    },
    update:async function(req,res,next){
        try{
            const id=req.params.id
            const result= MainController.update(req,res,"comments",id,next)
            return result
        }catch(err){
            return next(err)
        }
    },
    delete:async function(req,res,next){
        try{
            const id=req.params.id
            const result=MainController.delete(res,"comments",id,next)
            return result
        }catch(err){
            return next(err)
        }
    }
}