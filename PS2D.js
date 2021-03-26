const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Pass@1234",
  database: "awamad"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
    con.query("select * from club where club_id=102", function (err, result) {
        if (err) throw err;
        console.log(result);
  });
});