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



app.post('/user', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)
        console.log(req.body)
        connection.query('INSERT INTO user SET ?', [req.body], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Beer with the Record ID: ${[req.body.email]} has been added.`)
            } else {
                console.log(err)
            }

        })
    })
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));