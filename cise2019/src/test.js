  var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "us-cdbr-iron-east-02.cleardb.net",
    user: "b72f7916dad1ba",
    password: "bf43f260",
    database: "heroku_25a635bc8a152af"
});

connection.connect();

connection.query('select * from trees', function(err,result){console.log(result);});
