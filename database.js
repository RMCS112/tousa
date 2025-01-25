var mysql = require("mysql2")

//Create a Database Connection

var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'tousaMySQLdb24',
    database:'tousa'
})

con.connect((err) => {
    if(err)
    {
        console.log('               error               '+err.stack)
    }else{
        console.log("CONNECTION SUCCESSFUL!")
    }
})

// Get The Data From The Table
con.query('select * from tutors', (err, res) =>{
    return console.log(res)
})