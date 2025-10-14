import pool from "../config/database.js";
import { DeleteFromtable, GetAll, GetOne, UpdateTable } from "../helpers/utils.js";




export const coinsController={
    create:async function(req,res){
        try{
            const {name,country,year,material,value}=req.body
            const query=`INSERT INTO coins(name,country,year,material,value) VALUES($1,$2,$3,$4,$5) RETURNING *`
            const {rows}=await pool.query(query,[name,country,year,material,value])
            return res.status(200).send(rows)
        }catch(err){
            throw new Error(err)
        }
    },
    GetAll:async function(req,res){
        try{
            const result=await GetAll("coins")
            return result
        }catch(err){
            throw new Error(err)
        }
    },
    getOne:async function(req,res){
        try{
            const id=req.params.id
            const result=await GetOne("coins",id,res)
            return result
        }catch(err){
            throw new Error(err)
        }
    },
    update:async function(req,res){
        try{
            const id=req.params.id
            const result=await UpdateTable("coins",id,req,res)
            return result
        }catch(err){
            throw new Error(err)
        }
    },
    delete:async function(req,res){
        try{
            const id=req.params.id
            const result=await DeleteFromtable("coins",id,res)
            return result
        }catch(err){
            throw new Error(err)
        }
    }
}