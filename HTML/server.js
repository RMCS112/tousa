/*
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

*/

const express = require('express');
const path = require('path');
const { Pool } = require('pg'); // PostgreSQL library
const app = express();

// Create a PostgreSQL Database Connection Pool
console.log('check1');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // Use Render or another hosting service
    ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false, // Needed for some cloud DB providers
});

// Function to test database connection
pool.connect((err, client, release) => {
    if (err) {
        console.error('Database connection error:', err.stack);
    } else {
        console.log("CONNECTION SUCCESSFUL!");
        release(); // Release the client back to the pool
    }
});

// Launch server
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));

// Serve static pages
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/content', (req, res) => res.sendFile(path.join(__dirname, 'content.html')));
app.get('/tutoring', (req, res) => res.sendFile(path.join(__dirname, 'tutoring.html')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'aboutus.html')));
app.get('/success', (req, res) => res.sendFile(path.join(__dirname, 'success.html')));

// Handle tutor signup
app.post('/signup', async (req, res) => {
    try {
        const client = await pool.connect();
        const subjects = Object.keys(req.body).slice(1).join(); // Get selected subjects
        const email = req.body.email;
        await client.query('INSERT INTO tutors (subjects, email) VALUES ($1, $2)', [subjects, email]);
        client.release();
        console.log("Tutor signed up successfully.");
    } catch (err) {
        console.error('Error inserting tutor data:', err);
    }
    res.redirect('/success');
});

// Handle student booking
app.post('/book', async (req, res) => {
    try {
        const client = await pool.connect();
        const { subject, email } = req.body;
        await client.query('INSERT INTO students (subjects, email) VALUES ($1, $2)', [subject, email]);
        client.release();
        console.log("Student booking successful.");
    } catch (err) {
        console.error('Error inserting student booking:', err);
    }
    res.redirect('/success');
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server is listening on port ' + port);
    console.log(__dirname + '<-- dirname');
});