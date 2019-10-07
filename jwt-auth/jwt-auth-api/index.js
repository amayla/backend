var express = require('express')
var bodyParser = require ('body-parser')
var cors = require ('cors')
let jwt = require('jsonwebtoken')
const app = express()
const port = 1000
const appKey = 'secretkey'



app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('<h1>Welcome to JWT API</h1>')
})

app.post('/gettoken', (req, res) => {
    let {username,email} = req.body
    let token = jwt.sign({username,email}, appKey, {expiresIn:'12h'})
    console.log(token)
    res.send({
        username,
        email,
        token

    })
})

const auth = (req, res,next) => {
    if (req.METHOD !== 'OPTIONS'){
        console.log(req.headers.authorization)
        /*
        jwt.verivy
        param 1 = token
        param 2 = APP KEY(gaboleh ilang, harus sama)
        param 3 = callback fn (error, hasil decoded)
        
        */
        jwt.verify(req.headers.authorization,appKey, (error,decoded) => {
            if(error){
                //sama kaya res.send(object)
                return res.status(401).json({message:"User not authorized.", error:"User not authorized."});
            }
            //gapakai else karena ada return nya diatas. jadi boleh pakai else boleh juga tidak
            console.log({decoded})
            req.user = decoded
            //next adalah parameter javascript kosong . tugasnya kasih tau kalau function jalan,lanjut ke parameter berikutnya
            next()
        })
    } else{
        next()
    }
}

app.get('/verifytoken', auth
,
(req,res) => {
    res.send('User authorized')
})



app.listen(port, () => console.log("Server up in port " + port))

//ada 2 method yang sering dipakai disini. sign sm verivy. sign is for token creation and verivication token