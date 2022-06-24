const mysql = require('mysql2');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234592',
  database: 'pin_it'

});



module.exports = connection;