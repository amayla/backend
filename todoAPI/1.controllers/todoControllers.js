const db = require('../4.database/index.js')

module.exports = {
    getListByCompleted: (req,res) => {
        let sql = `select * from todo where isCompleted = '${req.query.parameterku}'`
        db.query(sql, (err,result) => {
            if(err) throw err
            res.send(result)
        })
    },
    
    getList: (req,res) =>{
        db.query(`select * from todo`, (err,result)=>{
            if(err) throw err
            res.send(result)
        })
    }, 
    
    addToDo:  (req,res) =>{
            db.query(`insert into todo values (0, '${req.body.action}',0)`, (err,result)=>{
                if(err) throw err
                res.send(result)
            })
    },

    editToDo: (req,res) => {
        db.query(`update todo set action = '${req.body.action}' where id = '${req.body.id}'`, (err,result)=>{
            if(err) throw err
            res.send(result)
        })
    },

    completedAction : (req,res) => {
        db.query(`update todo set isCompleted = 1 where id = '${req.body.id}'`, (err,result)=>{
            if(err) throw err
            res.send(result)
        })
    },

    deleteToDo : (req,res) =>{
        var id = req.params.id
        db.query(`delete from todo where id = ${id}`, (err,result)=>{
            if(err) throw err
            res.send(result)
        })
    },

    getUsersByRole : (req,res) =>{
        db.query(`select * from users where role = '${req.query.role}'`, (err,result)=>{
            if(err) throw err
            res.send(result)
        })
    }
    
}

