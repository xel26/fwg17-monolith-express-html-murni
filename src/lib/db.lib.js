const pg = require('pg')

const db = new pg.Pool({
    connectionString: "postgresql://postgres:1@localhost:5432/monolith?sslmode=disable"
})

db.on("connect", ()=>{
    console.log("DB Connected")
})

module.exports = db