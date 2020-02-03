const mysql = require("mysql");
require("dotenv").config();
const connection = mysql.createConnection(process.env.CONN_STR);

exports.add_client = (req, res) => {
    connection.query(`INSERT INTO clients (email) VALUES ("${req.body.email}")`, 
        (err, rows, fields) => {
            if(err) throw err;
        } 
    )
}
