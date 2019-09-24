const db = require('../database')

module.exports = {
    login: (req,res) => {
        let sql = `select * from users where username = '${req.query.username}' and password= '${req.query.password}'`
        db.query(sql, (err,result) => {
            if(err) throw err
            res.send(result)
        })
    },
    getUser: (req,res) => {
        let sql = `select * from users where username = '${req.query.username}'`
        db.query(sql, (err,result) => {
            if(err) throw err
            res.send(result)
        })
    },
    postUser: (req,res) => {
        let sql = `insert into users (username, password) values ('${req.body.username}', '${req.body.password}')`
        db.query(sql, (err,result) => {
            if(err) throw err
            res.send(result)
        })
    }
}