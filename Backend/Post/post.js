app.post('/Post/Upload', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)
        console.log(req.body)
        connection.query('INSERT INTO post SET ?', [req.body], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Beer with the Record ID: ${[req.body.id]} has been added.`)
            } else {
                console.log(err)
            }

        })
    })
})




app.get('/Post/View/:pid', (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log('connected as id ' + connection.threadId)
        connection.query('SELECT * from post WHERE pID = ? ',[req.params.pid], (err, rows) => {
            connection.release() // return the connection to pool

            if (!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

            // if(err) throw err
            console.log('The data from beer table are: \n', rows)
        })
    })
})