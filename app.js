const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3306;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'reg_form'
});

db.connect((err) =>{
    if(err){
        throw err;
    }
    console.log('MySQL connected');
});


app.use(express.json());


app.listen(port, () =>{
    console.log('Server is running on http://localhost:${port}');
});