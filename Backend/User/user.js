
 

app.get('/user', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * from user WHERE email = ?', [req.body.email], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

        })
    })
})

app.get('', (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log('connected as id ' + connection.threadId)
        connection.query('SELECT * from user ', (err, rows) => {
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

app.delete(':/id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)
        connection.query('DELETE from user WHERE id = ?', [req.body.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Beer with the Record ID: ${[req.body.id]} has been removed.`)
            } else {
                console.log(err)
            }

        })
    })
})

app.post('/user', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)
        console.log(req.body)
        connection.query('INSERT INTO user SET ?', [req.body], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Beer with the Record ID: ${[req.body.id]} has been added.`)
            } else {
                console.log(err)
            }

        })
    })
})

app.put('', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const {id, fname, lname,email,pw,rpw} = req.body

        connection.query('UPDATE employee SET fname = ?,lname = ?,email = ?,pw = ?,rpw = ? WHERE id=?', [fname,lname,email,pw,rpw,id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Beer with the Record ID: ${id} has been updated.`)
            } else {
                console.log(err)
            }

        })
    })
})