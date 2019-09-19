const db = require('../database')

module.exports = {
    login: (req,res) => {
        let sql = `select * from users where username = '${req.query.username}' and password= '${req.query.password}'`
        db.query(sql, (err,result) => {
            if(err) throw err
            res.send(result)
        })
    }
    // register: (req,res) => {
    //     let sql = `insert into users  = '${req.query.username}' and password= '${req.query.password}'`
    //     db.query(sql, (err,result) => {
    //         if(err) throw err
    //         res.send(result)
    //     })
    // }
}