// import pool from "../config/database.js";
// import { DeleteFromtable, pagination } from "../helpers/utils.js";

// export const tagsController={
//     create:async function(req,res){
//         try{
//             const {name}=req.body
//             const query=`INSERT INTO tags(name) VALUES($1) RETURNING*`
//             const {rows}=await pool.query(query,[name])
//             return res.status(200).send(rows)
//         }catch(err){
//             throw new Error(err)
//         }
//     },
//     getAll:async function(req,res){
//         try{
//             const result=await pagination("tags",req,res)
//             return result
//         }catch(err){
//             throw new Error(err)
//         }
//     },
//     delete:async function(req,res){
//         try{
//             const id=req.params.id
//             const result=await DeleteFromtable("tags",id,res)
//             return result
//         }catch(err){
//             throw new Error(err)
//         }
//     }
// }