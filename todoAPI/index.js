var express = require('express');
var app = express()
var bodyParser = require('body-parser')
var cors = require ('cors')
const port = 8080
const {
    addToDo,
    deleteToDo,
    editToDo,
    getList,
    getListByCompleted,
    getUsersByRole,
    getTodoJoinUsers
} = require('./1.controllers/todoControllers')
//const todoControllers = require('./1.controllers/todoControllers')

//menghilangkan fungsi yang sifatnya deprecated ketika di console
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req,res) =>{
    res.send(`<h1>Selamat datang di API todo JC 10</h1>`)
}
)
app.get('/getlistcompleted', getListByCompleted)

app.get('/getlist', getList)

app.post('/addtodo', addToDo)

app.put('/edittodo', editToDo)

app.put('/completedaction', completedAction)

app.delete('/deletetodo/:id', deleteToDo)

app.get('/getusersbyrole', getUsersByRole)

app.get('/gettodobyuser', getTodoJoinUsers)

// buat controller agar menjadi dinamis

app.listen(port,console.log('listening in port' + port))