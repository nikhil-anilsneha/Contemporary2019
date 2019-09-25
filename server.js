const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const path = require("path");
const port = process.env.PORT || 3001;

const app=express();

app.use(express.static(path.join(__dirname, "cise2019/build")));

let pool = mysql.createPool({
  connectionLimit: 10,
  multipleStatements: true,
  host: "us-cdbr-iron-east-02.cleardb.net",
  user: "b72f7916dad1ba",
  password: "bf43f260",
  database: "heroku_25a635bc8a152af"
});

app.use(cors());

app.get("/", (req, res) => {
  res.send("go to /tree");
});

app.get("/tree", (req, res) => {
  pool.getConnection(function(err, conn) {
    if (err) {
      res.send("Error occured");
    } else {
      conn.query("SELECT * FROM tree; SELECT * FROM tree WHERE tree_id=1;" 
      + "SELECT * FROM tree WHERE tree_id=2;SELECT * FROM tree WHERE tree_id=3;" +
      "SELECT * FROM tree WHERE tree_id=4;SELECT * FROM tree WHERE tree_id=5" +
      "SELECT * FROM tree WHERE tree_id=6; SELECT * FROM tree WHERE tree_id=7;" +
      "SELECT * FROM tree WHERE tree_id=8; SELECT * FROM tree WHERE tree_id=9", 
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

app.get("/tips", (req, res) => {
  pool.getConnection(function(err, conn) {
    if (err) {
      res.send("Error occured");
    } else {
      conn.query("SELECT * FROM tips; SELECT * FROM tips WHERE tips_id=1; SELECT * FROM tips WHERE tips_id=2", 
        [1,2,3], function(err2, records, fields) {
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

app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname + "/cise2019/build/index.html"));
})

app.listen(3001, () => {
  console.log("tree server listening on port 3001");
});
