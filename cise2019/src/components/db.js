const mysql = require(mysql)
const pool = mysql.createPool({
    connectionLimit : 10,
    host: 'localhost',
    user: 'root',
    password: 'cisezawlintun2019',
    database: 'CISE2019'
});

module.exports = pool;
