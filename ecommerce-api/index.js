var express = require('express');
var app = express()
var bodyParser = require('body-parser')
var cors = require ('cors')
const port = 1010
const {
    authRouter
} = require('./2.routers')
//const db = require('./database')
app.use(bodyParser())
app.use(cors())

//url
app.use('/auth', authRouter)

app.get('/', (req,res) =>{
    res.send(`<h1>Selamat datang di API ecommerce JC 10</h1>`)
}
)

app.listen(port,() => console.log('listening in port ' + port))