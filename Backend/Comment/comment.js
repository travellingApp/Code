app.post('/Comment', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)
        console.log(req.body)
        connection.query('INSERT INTO comment SET ?', [req.body], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Beer with the Record ID:  has been added.`)
            } else {
                console.log(err)
            }

        })
    })
})