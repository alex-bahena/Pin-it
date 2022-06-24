const mysql = require('mysql2');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'bruno2002',
  database: 'pin_it'

});



module.exports = connection;