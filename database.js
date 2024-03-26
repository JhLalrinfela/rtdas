const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  database: "astranhp_jhk",
  user: "root",
  password: "Mysqlpass@1",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Mysql Database is Connected Successfully ");
});

module.exports = con;
