var express = require('express')
var bodyParser = require ('body-parser')
var cors = require ('cors')

const app = express()
const port = 1110
var multer = require('multer')
//const { authRouter } = require('./routers')

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('hehe')
})

let multerStorageConfig = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null, './uploads')
    },

    filename : (req,file,cb) => {
        cb(null, 'myphoto.jpg')
    }
})

let filterConfig = (req, file,cb) => {
    if(file.mimetype.split('/')[1] == 'jpeg' || file.mimetype.split('/')[1] == 'png'){
        cb(null, true)
    }else{
        req.validation = {error : true, msg : 'File must be a .jpg/.png extension '}
        cb(null, false)
    }
        
}

let upload = multer({
    storage: multerStorageConfig,
    fileFilter: filterConfig
})

//app.use('/auth', authRouter)
app.post('/uploadimage', upload.single('aneh'), (req,res) => {
    console.log(req)
    res.send('success')
})

app.listen(port, () => console.log("Server up in port " + port))