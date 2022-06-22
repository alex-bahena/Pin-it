const mysql = require('mysql2');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ElonMusk2040!*',
  database: 'pin_it'
});



module.exports = connection;