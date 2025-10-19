import pool from "../config/database.js";
import { MainController } from "./main.controller.js";



export const tagsController = {
    post: async function (req, res, next) {
        try {
            const { name } = req.body
            const one = await pool.query(`SELECT * FROM tags WHERE LOWER(name)=LOWER($1)`, [name])
            if (one.rows.length !== 0) return res.status(400).send({ message: ` name ${name} should be unique` })
            const query = `INSERT INTO tags(name) VALUES($1) RETURNING *`
            const { rows } = await pool.query(query, [name])
            return res.status(201).send({
                message: "Successfully created",
                data: rows
            })
        } catch (err) {
            return next(err)
        }
    },
    getTags: async function (req, res, next) {
        try {
            const result = MainController.pagination(req, res, next, "tags")
            return result
        } catch (err) {
            return next(err)
        }
    },
    delete: async function (req, res, next) {
        try {
            const id = req.params.id
            const result = MainController.delete(res, "tags", id, next)
            return result
        } catch (err) {
            return next(err)
        }
    }
}