import pool from "../config/database.js";
import { DeleteFromtable, GetAll, GetOne, UpdateTable } from "../helpers/utils.js";




export const collection_coinsController={
    create:async function(req,res){
        try{
            const {collection_id,coin_id,condition,note}=req.body
            const query=`INSERT INTO collection_coins(collection_id,coin_id,condition,note) VALUES($1,$2,$3,$4)RETURNING *`
            const [rows]=await pool.query(query,[collection_id,coin_id,condition,note])
            return res.status(200).send(rows)
        }catch(err){
            throw new Error(err)
        }
    },
    getAll:async function(req,res){
        try{
            const result=await GetAll("collection_coins")
            return result
        }catch(err){
            throw new Error(err)
        }
    },
    getOne:async function(req,res){
        try{
            const id=req.params.id
            const result=await GetOne("collection_coins",id,res)
            return result
        }catch(err){
            throw new Error(err)
        }
    },
    update:async function(req,res){
        try{
            const id=req.params.id
            const result=await UpdateTable("collection_coins",id,req,res)
            return result
        }catch(err){
            throw new Error(err)
        }
    },
    delete:async function(req,res){
        try{
            const id=req.params.id
            const result=await DeleteFromtable("collection_coins",id,res)
            return result
        }catch(err){
            throw new Error(err)
        }
    }
}