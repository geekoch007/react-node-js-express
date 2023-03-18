const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  port: '8889',
  user: 'root',
  password: 'root',
  database: 'node_project'
});

module.exports = db;