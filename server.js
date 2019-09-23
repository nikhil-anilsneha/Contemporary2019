const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

const SELECT_ALL_PRODUCTS_QUERY = "SELECT * FROM trees";

/* const connection = mysql.createConnection({
  host: "us-cdbr-iron-east-02.cleardb.net",
  user: "b72f7916dad1ba",
  password: "bf43f260",
  database: "heroku_25a635bc8a152af"
}); */

const pool = mysql.createPool({
  host: "us-cdbr-iron-east-02.cleardb.net",
  user: "b72f7916dad1ba",
  password: "bf43f260",
  database: "heroku_25a635bc8a152af"
});


app.use(cors());

app.get("/", (req, res) => {
  res.send("go to /products"); 
});

/* connection.connect(err => {
  if (!err) console.log("DB connection succeded");
  else
    console.log(
      "DB Connection failed \n Error : " + JSON.stringify(err, undefined, 2)
    );
}); */

pool.getConnection(function(err, connection)
{
  connection.query(SELECT_ALL_PRODUCTS_QUERY, function(error, results, fields)
  {
    connection.release();
    if (err) {
      throw (error)
    }
  });
});

/* app.get("/products", (req, res) => {
  connection.query(SELECT_ALL_PRODUCTS_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results
      });
    }
  });
}); */

app.listen(3001, () => {
  console.log("products server listening on port 3001");
});