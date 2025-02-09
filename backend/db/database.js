var mysql      = require('mysql2');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'Todolist'
});
 
connection.connect(error=>{
    if (error) throw error;
    console.log("DB Connected")
});
module.exports= connection;