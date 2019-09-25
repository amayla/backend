var express = require('express')
var bodyParser = require ('body-parser')
var cors = require ('cors')

const app = express()
const port = 1010
const { authRouter } = require('./routers')


app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('hehe')
})

app.use('/auth', authRouter)

app.listen(port, () => console.log("Server up in port " + port))