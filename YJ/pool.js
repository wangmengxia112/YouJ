const mysql=require('mysql');
var pool=mysql.createPool({
host:'127.0.0.1',
port:'3306',
user:'root',
password:'',
database:'yj_user',
connectionLimit:20
});
module.exports=pool;
