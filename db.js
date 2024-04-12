var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
});
connection.connect();

// Insert data
var post  = {name: 'John', email: 'john@example.com'};
var query = connection.query('INSERT INTO users SET ?', post, function(err, result) {
    if (err) throw err;
    console.log(result.insertId);
});

// Select data
connection.query('SELECT * FROM users', function(err, rows, fields) {
    if (err) throw err;
    console.log(rows);
});

// Update data
var query = connection.query('UPDATE users SET name="Jane" WHERE id=1', function(err, result) {
    if (err) throw err;
    console.log(result.affectedRows);
});

// Delete data
var query = connection.query('DELETE FROM users WHERE id=1', function(err, result) {
    if (err) throw err;
    console.log(result.affectedRows);
});

connection.end();