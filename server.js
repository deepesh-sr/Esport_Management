// Assuming you already have this at the beginning of your file
const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 4000;
const path = require("path");

// Middleware to parse JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // For form submissions

app.use(express.static(path.join(__dirname, 'admin-panel-esport')));
// // MySQL connection
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Souvick',
//     database: 'blockchain1'
// });

// connection.connect(err => {
//     if (err) {
//         console.error('Error connecting to MySQL:', err);
//         return;
//     }
//     console.log('Connected to MySQL database!');
// });

// Route to handle user login
app.post('/post',(req,res)=>{
    const username = req.body.username;
    const password_hash = req.body.password_hash;

    connection.query('insert into user values (?,?)'[username,password_hash],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send("Posted");
        }
    })
})

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname, 'admin-panel-esport', 'index.html'));    
})
app.get('/dashboard',(req,res)=>{
    res.sendFile(path.join(__dirname, 'admin-panel-esport', 'dashboard.html'));    
})

app.get('/player-login',(req,res)=>{
    res.sendFile(path.join(__dirname, 'admin-panel-esport', 'final.html'));    
})



app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

