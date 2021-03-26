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
  con.query("create table Club (club_id int(2) ,club_head varchar(50),club_count int(3))", function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});