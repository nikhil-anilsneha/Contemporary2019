const express = require("express");
const cors = require("cors");
const mysql = require('mysql');
const bodyparser = require('body-parser');

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
  database: "heroku_25a635bc8a152af",
  connectionLimit : 10
});

app.use(cors());
app.use(bodyparser.json({type: 'application/json'}));
app.use(bodyparser.urlencoded({extended: true}));

/* app.get("/", (req, res) => {
  res.send("go to /Products.js"); 
});  */

/* connection.connect(err => {
  if (!err) console.log("DB connection succeded");
  else
    console.log(
      "DB Connection failed \n Error : " + JSON.stringify(err, undefined, 2)
    );
}); */

/* pool.getConnection(function (err, res, conn) {
  if (err)
      throw (err);

  // if you got a connection...
  console.log("DB connection succeded")
  conn.query(SELECT_ALL_PRODUCTS_QUERY, function(err, rows) {
      if(err) {
          conn.release();
          return res.send(400, 'Couldnt get a connection');
      }

      // for simplicity, just send the rows
      res.send(rows);

      // CLOSE THE CONNECTION
      conn.release();
  })
}); */

app.get("/", function (req, res) {
  pool.getConnection(function (err, pool) {
    console.log("DB connection suceeded");
    pool.query(SELECT_ALL_PRODUCTS_QUERY, function(error, results, fields) {
      if (error)
      {
        throw (error)
      }
      res.send(results)
    })
  })
});
  /* connection.query(SELECT_ALL_PRODUCTS_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results
      });
    }
  });
});  */

app.listen(3001, () => {
  console.log("products server listening on port 3001");
});