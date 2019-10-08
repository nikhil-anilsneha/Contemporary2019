const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const path = require("path");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;


var app=express();

app.use(express.static(path.join(__dirname, "cise2019/build")));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/cise2019/build'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

let pool = mysql.createPool({
  connectionLimit: 10,
  multipleStatements: true,
  host: "us-cdbr-iron-east-02.cleardb.net",
  user: "b72f7916dad1ba",
  password: "bf43f260",
  database: "heroku_25a635bc8a152af"
});



app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("go to /tree");
});

app.get("/tree", (req, res) => {
  pool.getConnection(function(err, conn) {
    if (err) {
      res.send("Error occured");
    } else {
      conn.query("SELECT * FROM tree; SELECT * FROM tree WHERE tree_id=1;SELECT * FROM tree WHERE tree_id=2;SELECT * FROM tree WHERE tree_id=3;"
      +"SELECT * FROM tree WHERE tree_id=4;SELECT * FROM tree WHERE tree_id=5;"
      + "SELECT * FROM tree WHERE tree_id=6; SELECT * FROM tree WHERE tree_id=7;" 
      + "SELECT * FROM tree WHERE tree_id=8; SELECT * FROM tree WHERE tree_id=9;" 
      + "SELECT * FROM tree WHERE tree_id=10; SELECT * FROM tree WHERE tree_id=11", 
        [1,2,3,4,5,6,7,8,9,10,11,12], function(err2, records, fields) {
        if (!err2) {
          res.json({
            data: records
          });
        }
        conn.release();
      });
    }
  });
});

app.get("/tips", (req, res) => {
  pool.getConnection(function(err, conn) {
    if (err) {
      res.send("Error occured");
    } else {
      conn.query("SELECT * FROM tips; SELECT * FROM tips WHERE tips_id=1; SELECT * FROM tips WHERE tips_id=2; SELECT * FROM tips WHERE tips_id=3;"
      + "SELECT * FROM tips WHERE tips_id=4; SELECT * FROM tips WHERE tips_id=5;"
      + "SELECT * FROM tips WHERE tips_id=6; SELECT * FROM tips WHERE tips_id=7; SELECT * FROM tips WHERE tips_id=8; SELECT * FROM tips WHERE tips_id=9;", 
        [1,2,3,4,5,6,7,8,9,10], function(err2, records, fields) {
        if (!err2) {
          res.json({
            data: records
          });
        }
        conn.release();
      });
    }
  });
}); 

app.get("/user_detail", (req, res) => {
  pool.getConnection(function(err, conn) {
    if (err) {
      res.send("Error occured");
    } else {
      const sql2 = "SELECT * FROM user_detail";
      conn.query(sql2, function(err2, records, fields) {
        if (!err2) {
          res.json({
            data: records
          });
        }
        conn.release();
      });
    }
  });
});

app.post("/user_detail", (req, res) => {
  pool.getConnection(function(err, conn) {
    if (err) {
      res.send("Error occured");
    } else {
      var data = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password
      };
      var sql = "INSERT INTO user_detail SET ?";
      conn.query(sql, data, function(err2, records, fields) {
        if (!err2) {
          console.log(records);
          res.send({
            status: "Data sukses diinput!",
            no: null,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password
          });
        }
        conn.release();
      });
    }
  });
});


app.listen(port, () => {
  console.log("tree server listening on port 3000");
});

