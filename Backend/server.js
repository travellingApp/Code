const express =require ('express');
const bodyParser =require('body-parser');
const mysql = require('mysql');
var cors=require('cors');

const app=express()
app.use(cors())

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:false}));

app.use(express.json());

const pool =mysql.createPool({
    connectionLimit :    10,
    host            :   'localhost',
    user            :   'root',
    password        :   '',
    database        :   'nalinda'
} );





app.listen(PORT, () => console.log(`Listening on port ${PORT}`));