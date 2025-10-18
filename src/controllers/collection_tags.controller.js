import pool from "../config/database.js";



export const collection_tagsController={
    post:async function(req,res,next){
        try{
            const{collection_id,tag_id}=req.body
            const query=`INSERT INTO collection_tags (collection_id,tag_id) VALUES($1,$2) RETURNING*`
            const {rows}=await pool.query(query,[collection_id,tag_id])
            return res.status(201).send({
                message:"Successfully created",
                data:rows
            })
        }catch(err){
            return next(err)
        }
    },
    get:async function(req,res,next){
        try{
            const {id}=req.params
            const one=await pool.query(`SELECT * FROM collections WHERE id=$1`,[id])
            if(one.rows.length===0) return res.status(404).send({message:`collection_id ${id} is wrong`})
            const query=`SELECT * FROM collection_tags WHERE collection_id=$1`
            const {rows}=await pool.query(query,[id])
            return res.status(200).send({
                message:"data found",
                data:rows
            })
        }catch(err){
            return next(err)
        }
    },
    delete:async function(req,res,next){
        try{
            const {id,tag_id}=req.params
            const one=await pool.query(`SELECT * FROM collections WHERE id=$1`,[id])
            if(one.rows.length===0) return res.status(404).send({message:`collection_id ${id} is wrong`})
            const query=`DELETE FROM collection_tags WHERE id=$1 RETURNING *`
            const {rows}=await pool.query(query,[tag_id])
            if(rows.length===0) return res.status(404).send({message:`There aren't any tags with this id${tag_id}`})
            return res.status(200).send({
                message:`${tag_id} deleted from table`,
                data:rows
            })
        }catch(err){
            return next(err)
        }
    }
}