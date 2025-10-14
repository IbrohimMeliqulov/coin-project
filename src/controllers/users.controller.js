import dotenv from 'dotenv'
dotenv.config()
import pool from "../config/database.js";
import * as bcrypt from "bcrypt"
import { tokensaving } from '../middleware/authorization.js';
import { jwtTokens } from '../middleware/verifyJWT.js';
import { DeleteFromtable, GetOne, pagination, UpdateTable } from '../helpers/utils.js';


export const userController={
    register:async function(req,res){
        try{
            const {name,email,password}=req.body
            const hashedPassword=await bcrypt.hash(password,10)
            const query=`INSERT INTO users(name,email,password) VALUES($1,$2,$3) RETURNING*`
            const {rows}=await pool.query(query,[name,email,hashedPassword])
            return res.status(200).send({
                message:`registered successfully`,
                data:rows[0]
            })
        }catch(err){
            throw new Error(err)
        }
    },
    login:async function(req,res){
        try{
            const {email}=req.body
            const {rows}=await pool.query(`SELECT * FROM users WHERE email=$1`,[email])
            const user=rows[0]
            if(!user) return res.status(404).send({message:`There isn't any user with this email, Please register`})

            const tokens=jwtTokens(user)
            tokensaving(tokens)
            if(!tokens==null){
                return res.status(201).send({message:"You successfully logged in"})
            }
        }catch(err){
            throw new Error(err)
        }
    },
    GetallUsers:async function(req,res){
        try{
            const result=await pagination("users",req,res)
            return result
        }catch(err){
            throw new Error(err)
        }
    },
    GetOne:async function(req,res){
        try{
            const result=await GetOne("users",res)
            return result
        }catch(err){
            throw new Error(err)
        }
    },
    updateUser:async function(req,res){
        try{
            const id=req.params.id
            const result=await UpdateTable("users",id,req,res)
            return result
        }catch(err){
            throw new Error(err)
        }
    },
    delete:async function(req,res){
        try{
            const id=req.params.id
            const result=await DeleteFromtable("users",id,res)
            return result
        }catch(err){
            throw new Error(err)
        }
    }
}