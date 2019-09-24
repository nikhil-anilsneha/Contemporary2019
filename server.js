// Video Link
// https://www.youtube.com/watch?v=XuLRKMqozwA

var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-02.cleardb.net",
  user: "b72f7916dad1ba",
  password: "bf43f260",
  database: "heroku_25a635bc8a152af"
});

connection.connect();

// inserting
// var trees = {
//     ID: '4',
//     Name: 'Strawberry',
//     Type: 'Fruit',
//     Price: '50'
// };

// var query = connection.query('insert into trees set ?', trees, function (err, result) {
//     if (err)
//     {
//         console.error(err);
//         return;
//     }
//     console.error(result);
// });

// retrieving all results
connection.query('select * from tree', function (err, result) {
    if (err)
    {
        console.error(err);
        return;
    }
    console.error(result);
});

// retrieving with "where" clause

// var ID = '3';

// connection.query('select * from trees where ID = ?', ID, function (err, result) {
//     if (err)
//     {
//         console.error(err);
//         return;
//     }
//     console.error(result);
// });