const mysql=require("mysql");
const db=mysql.createPool({
  host:'localhost',
  user:'test',
  password:'1234',
  database:'test',
});


module.exports=db;