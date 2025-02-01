const express = require('express')
const path = require('path')
const mysql2 = require('mysql2')
const app = express()

//Create a Database Connection
console.log('check1')

if (process.env.JAWSDB_URL) {
    var con = mysql2.createConnection(process.env.JAWSDB_URL)

    con.connect((err) => {
        console.log('check')
        if(err)
        {
            console.log('               error               '+err.stack)
        }else{
            console.log("CONNECTION SUCCESSFUL!")
        }
    })
}

// Launch server

app.use(express.static(__dirname))
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'index.html'))
    })

app.get('/content', (req,res) => {
    res.sendFile(path.join(__dirname,'content.html'))
    })

app.get('/tutoring', (req,res) => {
    res.sendFile(path.join(__dirname,'tutoring.html'))
    })

app.get('/about', (req,res) => {
    res.sendFile(path.join(__dirname,'aboutus.html'))
    })

app.get('/success', (req,res) => {
    res.sendFile(path.join(__dirname,'success.html'))
    })

app.post('/signup', (req,res) => {
    /*
    if (con.status == 'authenticated') {
        con.query('insert into tutors(subjects,email) values (?,?)',[Object.keys(req.body).slice(1).join(), req.body.email], (err, res) =>{
            return console.log(err)
        })
    } else {
        con.connect((err) => {
            console.log('check')
            if(err)
            {
                console.log('               error               '+err.stack)
            }else{
                console.log("       SECONDARY CONNECTION SUCCESSFUL       ")
                con.query('insert into tutors(subjects,email) values (?,?)',[Object.keys(req.body).slice(1).join(), req.body.email], (err, res) =>{
                    return console.log(err)
                })
            }
        })
    }
    
    */
   res.redirect('/success')
})

app.post('/book', (req,res) => {
    if (con.status == 'authenticated') {
        con.query('insert into students(subjects,email) values (?,?)',[req.body.subject, req.body.email], (err, res) =>{
            return console.log(err)
        })
    } else {
        con.connect((err) => {
            console.log('check')
            if(err)
            {
                console.log('               error               '+err.stack)
            }else{
                console.log("       SECONDARY CONNECTION SUCCESSFUL       ")
                con.query('insert into students(subjects,email) values (?,?)',[req.body.subject, req.body.email], (err, res) =>{
                    return console.log(err)
                })
            }
        })
    }
    
})

port=process.env.PORT || 3000
app.listen(port, () => {
    console.log('Server is listening on port '+port)
    console.log(__dirname + '<-- dirname')
    })