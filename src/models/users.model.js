const db = require("../lib/db.lib")

exports.findAllUsers = async()=>{
    const sql = `SELECT * FROM users ORDER BY id ASC`
    const values = []
    const {rows} = await db.query(sql, values)
    return rows
}

exports.findOneUser = async(id)=>{
    const sql = `SELECT * FROM users WHERE id=$1`
    const values = [id]
    const {rows} = await db.query(sql, values)
    return rows[0]
}

exports.updateUser = async(id, data)=>{
    const sql = `
    UPDATE users SET 
    full_name = $2,
    email = $3,
    password = $4,
    updated_at = NOW()
    WHERE id=$1
    RETURNING *`
    const values = [id, data.full_name, data.email, data.password]
    const {rows} = await db.query(sql, values)
    return rows[0]
}

exports.deleteUser = async(id)=>{
    const sql = `DELETE FROM users WHERE id=$1 RETURNING *`
    const values = [id]
    const {rows} = await db.query(sql, values)
    return rows[0]
}