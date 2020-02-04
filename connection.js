const mysql = require("mysql");
require("dotenv").config();
let config = process.env;

const connection = mysql.createConnection({
    host: config.HOST,
    user: config.USERNAME,
    password: config.PASSWORD,
    database: config.DATABASE
});

exports.add_client = (req, res) => {
    connection.query(`INSERT INTO clients (email) VALUES ("${req.body.email}")`, 
        (err, rows, fields) => {
            if(err) throw err;
        } 
    )
}
