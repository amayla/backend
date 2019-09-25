var mysql = require('mysql')

const db = mysql.createConnection({
    user: 'root',
    password: '12345678',
    database: 'bukatoko_api',
    host: 'localhost'
})

module.exports = db