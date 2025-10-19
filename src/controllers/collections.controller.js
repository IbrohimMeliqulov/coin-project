import pool from "../config/database.js";
import { slugify } from "../helpers/slugify.js";
import { MainController } from "./main.controller.js";






export const collectionController = {
    post: async function (req, res, next) {
        try {
            const { user_id, title, description } = req.body
            const one = await pool.query(`SELECT * FROM users WHERE id=$1`, [user_id])
            if (one.rows.length === 0) return res.status(404).send({ message: `this user_id ${user_id} doesnt exist` })
            const slug = slugify(title)
            const search = await pool.query(`SELECT * FROM collections WHERE LOWER(title)=LOWER($1) AND user_id=$2`, [title, user_id])
            if (search.rows.length > 0) return res.status(400).send({ message: `This title ${title} already exists` })
            const query = `INSERT INTO collections(user_id,title,slug,description) VALUES($1,$2,$3,$4) RETURNING*`
            const { rows } = await pool.query(query, [user_id, title, slug, description])
            return res.status(200).send({
                message: `Successfully created`,
                data: rows
            })
        } catch (err) {
            return next(err)
        }
    },
    update: async function (req, res, next) {
        try {
            const result = MainController.update(req, res, "collections", id, next)
            return result
        } catch (err) {
            return next(err)
        }
    },
    delete: async function (req, res, next) {
        try {
            const id = req.params.id
            const result = MainController.delete(res, "collections", id, next)
            return result
        } catch (err) {
            return next(err)
        }
    },
    getCollections: async function (req, res, next) {
        try {
            const result = MainController.pagination(req, res, next, "collections")
            return result
        } catch (err) {
            return next(err)
        }
    },
    getOne: async function (req, res, next) {
        try {
            const id = req.params.id
            const result = MainController.findone(res, "collections", id, next)
            return result
        } catch (err) {
            return next(err)
        }
    },
    getCollectionsByUserId: async function (req, res, next) {
        try {
            const { user_id } = req.params
            const result = await pool.query(`SELECT * FROM collections WHERE user_id=$1 ORDER BY id`, [user_id])
            if (!result || result.rows.length === 0) return res.status(404).send({ message: `${user_id} user_id not found` })
            return res.status(200).send({
                message: `data found`,
                data: result.rows
            })
        } catch (err) {
            return next(err)
        }
    }
}