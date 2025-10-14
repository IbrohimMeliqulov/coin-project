import pool from "../config/database.js";
import { DeleteFromtable, GetOne, pagination, UpdateTable } from "../helpers/utils.js";



export const collectionController={
    post:async function(req,res){
        try{
            const {user_id,title,description}=req.body
            const query=`INSERT INTO collections(user_id,title,description) VALUES($1,$2,$3) RETURNING*`
            const {rows}=await pool.query(query,[user_id,title,description])
            return res.status(200).send(rows)
        }catch(err){
            throw new Error(err)
        }
    },
    getall:async function(req,res){
        try{
            const result=await pagination("collections",req,res)
            return result
        }catch(err){
            throw new Error(err)
        }
    },
    getone:async function(req,res){
        try{
            const result=await GetOne("collections",res)
            return result
        }catch(err){
            throw new Error(err)
        }
    },
    update:async function(req,res){
        try{
            const id=req.params.id
            const result=await UpdateTable("collections",id,req,res)
            return result
        }catch(err){
            throw new Error(err)
        }
    },
    delete:async function(req,res){
        try{
            const id=req.params.id
            const result=await DeleteFromtable("collections",id,res)
            return result
        }catch(err){
            throw new Error(err)
        }
    }
}