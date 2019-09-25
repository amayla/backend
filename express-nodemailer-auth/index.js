var express = require('express');
var app = express()
var bodyParser = require('body-parser')
var cors = require ('cors')
const port = 1337
const nodemailer = require('nodemailer')
//const db = require('./database')
app.use(bodyParser.json())
app.use(cors())
var mysql = require('mysql')

const db = mysql.createConnection({
    user:"root",
    password: "12345678",
    database:'authentication_test',
    host:'localhost'
})


app.get('/', (req,res) =>{
    res.send(`<h1>Welcome to nodemailer auth API</h1>`)
}
)
let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'in.orchidfour@gmail.com',
        pass:'bkmvyezscludbsjf'
    }
})


app.get('/sendmail', (req,res) =>{
    let to = req.query.email
    let mailOptions = {
        from:'Amanda Larasati <in.orchidfour@gmail.com>',
        to,
        subject:'Your registration is succeed',
        html:'<h1> Welcome to Commoditea!</h1>'
    }
    if(to){
        transporter.sendMail(mailOptions,(err,info)=>{
            if (err) throw err
            res.send('Email Berhasil')
        })
    }else{
        res.send('Email kosong!')
    }
}
)

app.get('/sendverificationmail', (req,res) =>{
    let to = req.query.email
    let username=req.query.username
    let mailOptions = {
        from:'Amanda Larasati <in.orchidfour@gmail.com>',
        to,
        subject:'Your registration is succeed',
        html:`<p>Klik <a href='http://localhost:1337/verify?username=${username}'>link</a> ini untuk verifikasi akun anda</p>`
    }
    if(to){
        transporter.sendMail(mailOptions,(err,info)=>{
            if (err) throw err
            res.send('Email Berhasil')
        })
    }else{
        res.send('Email kosong!')
    }
    
}

)
app.get('/verify', (req,res) =>{
    let username=req.query.username
    let sql = `update users set verified = 1 where username = '${username}'`

    db.query(sql, (err,result)=> {
        if (err) throw err
        res.send('Congratulations, your account is now verified')
    })
})




app.listen(port, console.log('Listening in port ' + port))