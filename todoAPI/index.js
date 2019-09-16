var express = require('express');
var app = express()
var bodyParser = require('body-parser')
var cors = require ('cors')
const port = 8080
const todoControllers = require('./1.controllers/todoControllers')

app.use(bodyParser())
app.use(cors())

app.get('/', (req,res) =>{
    res.send(`<h1>Selamat datang di API todo JC 10</h1>`)
}
)

app.get('/getlist', todoControllers.getList)

app.post('/addtodo', todoControllers.addToDo)

app.put('/edittodo', todoControllers.editToDo)

app.put('/completedaction', todoControllers.completedAction)

app.delete('/deletetodo/:id', todoControllers.deleteToDo)

// buat controller agar menjadi dinamis

app.listen(port,console.log('listening in port' + port))