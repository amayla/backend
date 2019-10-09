var express = require('express')
var bodyParser = require ('body-parser')
let userRouter = require('./routers/userRouter')
const app = express()
const port = 1200

app.use(bodyParser.json())


app.use('/users', userRouter)
app.get('/', (req, res) => {
    res.send(`<h1>Welcome to Mongo API</h1>`)
})


app.listen(port, () => console.log("Server up in port " + port))