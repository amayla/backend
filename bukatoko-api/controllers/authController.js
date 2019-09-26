const db = require('../database')
const nodemailer = require('nodemailer')
var { pdfcreate } = require('../helpers/html-pdf')


 

module.exports = {
    login: (req, res) => {
        db.query(`select * from users where username = '${req.query.username}'`, (err, result) => {
            if (err) throw err
            if (result.length > 0){
                if(req.query.password === result[0].password){
                    res.send({
                        status: '200',
                        result: result [0]
                    })
                } else {
                    res.send({
                        status: '401',
                        message: 'Wrong password'
                    })
                }
            } else {
                let hasil = {
                    status: '404',
                    message: 'User not found'
                }
                res.send(hasil)
            }
        })
    },
    register: (req, res) => {
        let sql = `select * from users where username = '${req.body.username}'`
        let sql2 = `insert into users value (0, '${req.body.username}', '${req.body.email}','${req.body.password}', 'user', '0')`

        db.query(sql, (err, result) => {
            if (err) throw err
            if(result.length > 0){
                res.send({
                    status: '400',
                    message: 'Username has been taken'
                })
            } else {
                db.query(sql2, (err2, result2) => {
                    if (err2) throw err2
                    res.send({
                        status: '201',
                        message: 'Your account has been created'
                    })
                })
            }
        })
    },

    sendVerificationMail: (req,res) =>{
        let to = req.query.email
        let username=req.query.username
        let mailOptions = {
            from:'Amanda Larasati <in.orchidfour@gmail.com>',
            to,
            subject:'Your registration is succeed',
            html:`<p>Click <a href='http://localhost:1010/auth/verify?username=${username}'>here</a> to verify your account.</p>`
        }
        if(to){
            transporter.sendMail(mailOptions,(err,info)=>{
                if (err) throw err
                res.send('Email succeed')
            })
        }else{
            res.send('Email empty')
        }
        
    },
    verify: (req,res) =>{
        let username=req.query.username
        let sql = `update users set verified = 1 where username = '${username}'`
    
        db.query(sql, (err,result)=> {
            if (err) throw err
            res.send('Congratulations, your account is now verified')
        })
    }, 

    testEmail : (req,res) => {
        let options = {
            format : 'A4',
            orientation : 'portrait',
            border: {
                top:'0.5in',
                left:'0.15in',
                right:'0.15in',
                bottom:'0.25in'
            }
        }
        let date = new Date()
        let replacements = {
            username: req.query.username,
            date: `${date.getDate()}-${date.getMonth()}`,
            data: ['Wahai', 'kalian', 'para', 'jomblo']
        }
        pdfcreate('./pdfTemplates/firstTemplate.html',replacements,options,(hasil) => {
            res.attachment('testingPDF.pdf')
            hasil.pipe(res)

        })
    }



}