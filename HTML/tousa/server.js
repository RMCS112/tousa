const express = require('express')
const path = require('path')
const mysql2 = require('mysql2')
const app = express()

//Create a Database Connection
console.log('check1')  
var con = mysql2.createConnection({
    host:'localhost',
    user:'root',
    password:'tousaMySQLdb24',
    database:'tousa'
})
    
con.connect((err) => {
    console.log('check')
    if(err)
    {
        console.log('               error               '+err.stack)
    }else{
        console.log("CONNECTION SUCCESSFUL!")
    }
})

    // Insert data in table
con.query('insert into tutors(name,paid,subjects,vouched,email) values (${},${},${})', (err, res) =>{
    return console.log(res)
})

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

app.post('/signup', (req,res) => {
    console.log(Object.keys(req.body))
    con.query('insert into tutors(subjects,email) values (?,?)',[Object.keys(req.body).slice(1).join(), req.body.email], (err, res) =>{
        return console.log(err)
    })
    
})

app.post('/book', (req,res) => {
    console.log(Object.keys(req.body))
    con.query('insert into students(subjects,email) values (?,?)',[req.body.subject, req.body.email], (err, res) =>{
        return console.log(err)
    })
    
})

port=process.env.PORT || 3000
app.listen(port, () => {
    console.log('Server is listening on port '+port)
    console.log(__dirname + '<-- dirname')
    })

    

