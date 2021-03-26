const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Pass@1234",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE AWAMAD", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});