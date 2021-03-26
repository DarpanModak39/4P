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
    con.query("insert into Club (club_id  ,club_head ,club_count ) values('102' ,'Christopher' ,'30')", function (err, result) {
        if (err) throw err;
        console.log("Data inserted");
  });
});