import pool from "../config/database.js"

export const updateCoinStatus = async (trade, req, res, next) => {
    try {
        const { collection_id, coin_id, condition, note } = req.body
        const values = [collection_id, coin_id, condition, note]
        const one = await pool.query(`DELETE FROM collection_coins WHERE coin_id=$1`, [trade.coin_id])
        const query = `INSERT INTO collection_coins (collection_id,coin_id,condition,note) VALUES($1,$2,$3,$4) RETURNING*`
        const { rows } = await pool.query(query, values)
        return res.status(201).send({
            message: `${trade.id} updated successfully`,
            data: rows
        })
    } catch (err) {
        return next(err)
    }
}