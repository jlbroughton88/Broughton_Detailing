const mysql = require("mysql");
require("dotenv").config();
const connection = mysql.createConnection(process.env.JAWSDB_URL);
connection.connect();

exports.add_client = (req, res) => {
  connection.query(
    `INSERT INTO clients (email) VALUES ("${req.body.email}")`,
    (err, rows, fields) => {
      if (err) throw err;
    }
  );
};

exports.get_clients = (req, res) => {
  connection.query(`SELECT * FROM clients`, (err, rows, fields) => {
    if (err) throw err;
    console.log(rows);
    res.send(rows);
  });
};
