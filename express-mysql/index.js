var express = require('express');
var app = express()
var bodyParser = require('body-parser')
var cors = require ('cors')
const port = 2019
const db = require('./database/index')

app.use(bodyParser.json())
app.use(cors())
//callbck function yang menerima function sebagai variabel
app.get('/',(req,res)=> {
    res.send(`<h1>welcome to my first API</h1>`)
})

app.get('/testing', (req,res) => {
    res.send(`<h1>Ini path testing</h1>`)
})

//get

app.get('/getusers', (req,res) => {
    db.query(`select * from users`, (err, result) => {
        if(err) throw err;
        res.send(result)
    })
})

//route untuk post
// app.post('/postuser',(req,res) => {
//     db.query(`insert into users values(0,'sasuke','sasuke@mail.com','ninja')`,(err, result) =>{
//         if(err) throw err;
//         res.send(result)
//     })  
// })
app.post('/postuser',(req,res) => {
    let { username,email,role} = req.body
    db.query(`insert into users values(0,'${username}','${email}','${role}')`,(err, result) =>{
        if(err) throw err;
        res.send(result)
    })  
})

// app.post('/postuser',(req,res) => {
//     
//     db.query(`insert into users values(0(karena auto increment),'${req.body.username}'(klo var char harus selalu pakai tanda petik),'${req.body.email}','${req.body.role}')`,(err, result) =>{
//         if(err) throw err;
//         res.send(result)
//     })  
// })

//di work bench : insert into users  values (0,'user', 'seto', 'seto@mail.com');

app.listen(port,() => console.log('listening...'))