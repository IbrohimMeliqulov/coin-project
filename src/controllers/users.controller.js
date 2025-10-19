import dotenv from 'dotenv'
dotenv.config()
import pool from "../config/database.js";
import * as bcrypt from "bcrypt"
import { jwtTokens } from '../middleware/verifyJWT.js';


export const userController = {
    register: async function (req, res, next) {
        try {
            const { name, email, password } = req.body
            const hashedPassword = await bcrypt.hash(password, 10)
            const query = `INSERT INTO users(name,email,password) VALUES($1,$2,$3) RETURNING id,name,email,created_at,updated_at`
            const { rows } = await pool.query(query, [name, email, hashedPassword])
            return res.status(200).send({
                message: `registered successfully`,
                data: rows[0]
            })
        } catch (err) {
            return next(err)
        }
    },
    login: async function (req, res, next) {
        try {
            const { email } = req.body
            const { rows } = await pool.query(`SELECT * FROM users WHERE email=$1`, [email])
            const user = rows[0]
            if (!user) return res.status(404).send({ message: `There isn't any user with this email, Please register` })
            let tokens = jwtTokens(user)
            res.cookie("refresh_token", tokens.refreshToken, { httpOnly: true })
            return res.status(201).send({
                message: "You successfully logged in",
                tokens: tokens
            })
        } catch (err) {
            return next(err)
        }
    },
    getUsers: async function (req, res, next) {
        try {
            const { page = 1, limit = 10, filter, value } = req.query
            const pageNumber = Number(page)
            const limitNumber = Number(limit)
            const offset = (pageNumber - 1) * limitNumber
            if (filter && value) {
                const query = `SELECT id,name,email,created_at,updated_at FROM users WHERE ${filter} ILIKE $1 LIMIT $2 OFFSET $3`
                const { rows } = await pool.query(query, [`%${value}%`, limitNumber, offset])
                return res.status(200).send({
                    page: pageNumber,
                    limit: offset,
                    total: rows.length,
                    data: rows
                })
            } else {
                const query = `SELECT id,name,email,created_at,updated_at FROM users LIMIT $1 OFFSET $2`
                const { rows } = await pool.query(query, [limitNumber, offset])
                return res.status(200).send({
                    page: pageNumber,
                    limit: offset,
                    total: rows.length,
                    data: rows
                })
            }
        } catch (err) {
            return next(err)
        }
    },
    getOne: async function (req, res, next) {
        try {
            const { id } = req.params
            const { rows } = await pool.query(`SELECT id,name,email,created_at,updated_at FROM users WHERE id=$1`, [id])
            if (rows.length === 0) return res.status(404).send({ message: `${id} not found` })
            return res.status(200).send({
                message: true,
                date: rows
            })
        } catch (err) {
            return next(err)
        }
    },
    updateUser: async function (req, res, next) {
        try {
            const id = req.params.id
            const one = await pool.query(`SELECT * FROM users WHERE id=$1`, [id])
            if (one.rows.length === 0) return res.status(404).send({ message: `${id} not found` })
            const keys = Object.keys(req.body)
            const values = Object.values(req.body)
            let setquery = keys.map((key, i) => `${key}=$${i + 1}`).join(",")
            const index = keys.findIndex(key => key === "password")
            if (index !== -1) {
                const password = values[index]
                const hashPassword = await bcrypt.hash(password, 10)
                values[index] = hashPassword
            }
            const query = `UPDATE users SET ${setquery}, updated_at=NOW() WHERE id=$${keys.length + 1} RETURNING id,name,email,created_at,updated_at`
            const { rows } = await pool.query(query, [...values, id])
            return res.status(200).send({
                message: `Successfully updated`,
                data: rows[0]
            })
        } catch (err) {
            return next(err)
        }
    },
    delete: async function (req, res, next) {
        try {
            const id = req.params.id
            const one = await pool.query(`SELECT * FROM users WHERE id=$1`, [id])
            if (one.rows.length === 0) return res.status(404).send({ message: `${id} not found` })
            const query = `DELETE FROM users WHERE id=$1 RETURNING *`
            const { rows } = await pool.query(query, [id])
            return res.status(200).send({
                message: `${id} delete from table`,
                data: rows[0]
            })
        } catch (err) {
            return next(err)
        }
    }
}